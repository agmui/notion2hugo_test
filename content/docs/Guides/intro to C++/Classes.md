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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUADU2JX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T170443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDbQqGZAj%2BEKvVL3N9lUwD3O08BkaLUPZ3fCxvLC2TbGQIgO6eF4JdqykH1RRE8mEU0TdLX4HJXcHgO08%2BEFqLeftcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyAoT0H1O603x9M4SrcA7Wim0BkWYFQ%2Fb6%2F8UckJeIv2ZcmavCOZRCs1GGMr1lR2nM9fx7bit4RLKiWNCdcEZGPKfSM1idFhNouyio2OfGazkV5SeRyewm4Gfj%2FMrhpaLs8SpgQZZwbVfqM4jpC%2B5SUdVoyjQfmEhj2BxAQspp%2BklmBd06SNKM1DZQNKjMQpmAh%2FJAtazvUjGs7fR4FuNSEvTI0BvNnaewlYfj90K1qqpwZ4KnrEgmrLjDcfnVDQGucn28YRGE%2F%2BTA48yY2erp1hbH0gq6TXsDd1izDx1%2FoFivGeZ3Jyha7lV7aJzzwsV5vrzamxWitXSv70jg7LtoU%2BZ%2B5JoJQOg5EhqVWT0qwxv%2FRKaowi1YjT7O%2BOVQ8xZ4%2F%2FLAhcaZcyILfSpdTUaUQ1QxbZX6xZEKZ16%2B%2BXCCFLxyJAZrhrTXehRJdu%2BdEwSkeSgS02gPdHYy3TzbShiHe4xU5rtkRB9sohj73CSHEf5WPbnnAEJ1J9V4otqdeUPAu5bczQPAeNrUPBJjgQiEtQrQ2RcvLWFpeZzgflcoXNv8oW7TQMogw0I7JkN7kHzCnNadTIwdF5XxeWyBJbgrLulVrcuSBZ3xPg326h94LaleeuMGgnLREZj2pO4vda0a5QqHCEYj7%2B6kUMKiG%2FsAGOqUB3sy25rE3JlAfrFahW3Cb15thBR7V9UsiYa60MWZ46VZxSVnsmEsI5zEwY9QUxjnTPHhP713g4evHlcEwyrIEP7X2KK2HVcSXwbx9d3%2Bs%2FnxJRYjPuA6u3qH%2FRf2SXqaYBO9csU7OAJbbKm2rqK%2BGPtxBMvuMti%2FGhxQZvhAmjLNIzvD3oFAfcmwKFfihAMI%2BIm2eaQa8Z9herM4yNj%2B10KKwwkut&X-Amz-Signature=d7d3d3207f3d8d7b2a874890d4f2ddc6c1f4307feaa9dab6e29fce26695a75c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
