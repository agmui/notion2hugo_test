---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGGWNO2W%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEya8aDiZNAy4PtuL0vD8kdpdHEMAzwsj5ro3c9vBZSOAiABt%2BjzHeNc5OzzzHqnylrpoVq66Sedkv6RWj%2FA9wtjiCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMS09s1CvCDy2OBwU%2FKtwDE1i3DSesidSgGRnOlFxpNb0jdquuSfUydDC%2BVkqjXKlTF19FuUHQjl6CO2DLKCfOaOfPIGeuIK0c5XysvoPvS9ZxL5Cs8hx%2FVj6z0XW2d%2FtwGoUfj2Bj%2F1ZuNPUskxMbMSOxVxF8tFpH99%2FgL5eOj%2FoklD2yDSTdTe9IGZmH%2BPXfukpvZA9Q%2BYdH3vTKNqrvhXfaoQAqTJ6BPTM1GKjLDLUl0qUqNC4yeih%2BCIEbg7ChRMLj4y05KXHXTb%2Fh%2FM94mck%2BWBmrGOZvqnF%2FtJcP4Eijr5MsNXAn8ewW4JCnTunfGm5JYicOqxiXdgIrniqKH1w5PGTD%2FSg3E4qTQ7KiwDJ8FMZ2sTNxmkTkR8%2FQ%2BrjWC3E%2BQTxc5WMQZTiroQXKa6B9VZC5sZPmz%2FHpjGs0mVZgz9JabrVYKrAaNZyhxCufnpAgqoJlA2yzvBhmlbvwoe1EjUmVpMbBKt9m%2Bymii08KJ255RM5qDZ91zJlvGCr4wZLmALYD%2F%2FQ5DJZmVbCsrXhpjxzE1%2F4zH4l1QU7LJ19Pr10ARvCb6z8yOwsSwKx%2FJLznN4H3GPytduXIPiRcxTNYCsAvzJgGBjOSGsvnvO1%2BYfQhUG8aDD2m7P54c7Qkf9KCxSAOeHsIIGow07bywwY6pgFHkLVDqSfAVEvLjX7jxG3ChCpVp%2Fje2FgRiNqGdvKvVduItKItWxmL7Xqk4M3WdrDQGj9SARPPqrg4A6I%2BCR8UguRHFN01U8caGKXIP9JKKTGIRWBSeZMEasVvrkbNgGNx%2BYRVFOO%2BuZlL6Oivldpxn1XdUQt2zi6gc28EuR81YqAgSUVRsp7cj3iowwI6%2BiKTdMkwlY8MDExpYcIts%2FsEj9k6zo7D&X-Amz-Signature=c008e8b52fde4d699824cd37646318d177641898a6e973ce3c31613b57a56320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
