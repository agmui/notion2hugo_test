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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHNZW52S%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJIMEYCIQCKfXBOhilHHuT1QPfIWVXBrMBQHCM98FmLHFAOv4RdMwIhAJHbxPEcd8SdPWxbmqI5FmE34w7stCZEUJyY%2F5oWzbZmKv8DCBsQABoMNjM3NDIzMTgzODA1Igx6WZbDDH4%2FO9k1SwIq3AOGIprCyBKQsPFIZB4R%2BujwxcxnVNrIRB0%2B7RNuyLfkR%2BG3styIst6a1RM4%2FfQXh7a%2Bzg%2FQuoHBVoRIpoDvd5XOSJDKasm0GaYqqCKOcFwPPwU8BGnotEUQ6R58j6jtNNV2Ky6jGoQNcpKYJSDg8a9tt8KY8gbHcG0s3BwNK%2BS2a2htEy4LmWWLD6EG%2BIUHqEeXZL6FeryyRKlT7dw%2BJlebT%2FudTNzOshO8QOff6v0k59AHzHQyKROoVW4O8W81BqjxaXyEnInYtFAY%2F8icO%2B4Y%2BnT%2FaMrCxPUC7xmUh0HXs%2BksvsdR45WtTDRmweeWOB8bo5%2BsrM46HePjbs8%2FIVDIFimOItTPtZuc406EoWdA7VgAou5JjZPU2Y%2F0gQs8pD1Z6ZK6FbRiXYmMAZXdeK34fDu%2FZODUXyzDqBFgUOBUKXBcs7QMk58hvD7p3DA%2BQiWncqi6RZZ5hwNeHip9ZOyscsx%2F%2B2Ph0KJBs7%2BgRY2idSusxzROnHHjc1FscsEbkub50EJc%2BDl%2BtJWX0G9SzBu6P98d7%2F3kRNdjwuYzdxqNl4h%2Bqzm1cWaFCLjGwwITr%2BnSXnNGudxjaxTh5rW2t44nFbc9qUgWS7foIbkPXgueT00tK%2B4UlO2NHCEx1TCMlsjBBjqkAYrLrw9qhb6PE9dksGOGwSMi2bMvoje01wShdcgEz14qQP6TP86M2ScnaEw5QuqU0OvA5s%2Bvid%2BSSsy2c4xO1XsUTgrds8aj9JtKjKj0k1mLsjYHP%2BBMGrZKduA3MsNBn8pVH5DhvHjxerA8zGoHI%2FU6ZxwVT%2BAbaGeku9fh1giau08DXgVaAmRgZkLxQdH9WIyCUuoAuj8K3mguSupzmoTp8aRW&X-Amz-Signature=98ce11ab72706bf2b893cbbfb84bf736d76a95668d09d0c4fe4f7ded7a4b1b73&X-Amz-SignedHeaders=host&x-id=GetObject)

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
