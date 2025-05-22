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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYMTLAXV%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T181155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIAaT%2BLtaKGo3HhYjhTHTNrb8nygyf23LTcyQ1RMs%2BLORAiBe0F2bgV30vuilNrLPBME%2BqkgLZjzbHflcE6CEYF%2FeDyqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZp5ZKiJ5stnUWTD%2FKtwDm2fwYROZ6HaKsWcssAg0KkU4E%2B6s6y6nuih4enQ2w5UL46CHX8cThMICFUjan68xEivhz9z673u0FHj%2FCb6bfedW1JIeCKWi76SJeIbbqEmHk3FRYpwGZqvFEfqkhzI5vEKXguKauIQ%2Fm2TcJXvcQRc5ZhH0LV3qxmuF0ex7UdkxZGuztpDWPJFKBTXLC05beO3KfxfyN%2BHFNPez0XMVSiL1ZzozrMZpg6nFWtHTUijPorFyVWybEEE%2FO52zlAkLgqw9p7TJkjbP7o8Iw88OftlugWxflRfvTnCRzjB3xvc8VTdeNxM6MJpLtRtSkMa32%2BWgOq%2Fm9r4rxmeDXbgG1dHcO8Qiwf3%2FjVYbQM5azzO9AHGOUqUGCFjs9ivG63GsXO4DjWF%2FE01%2BzGtZQujl%2FfFVO8J7uy4CBA5%2F%2BcHhZJ1GDA7q4xbdRahoLdyPU1PbFcoicy7jLG6DwLMzvZdSDUIgPbEd%2F1px6U2Sn6G2cecr5oyQ3TtXtMEzNU6Gb7JP9ufqyllOLfJ7ZY3K4F%2Fc%2FAC1sQYwmHmP2NFA0XeaxwaYBznwWFUJmkI2OQCxygiL%2F2MGwFarmJuuyhmSxxxJg9tHlnADhwM2VuNyJ%2Fg%2FfqKDYiWETrmKD9dQZq4w9uG8wQY6pgF0mAd%2BrJYmfCOiaNq3DqwuUDFhjqNgbef77%2Bgm4vI%2BemSSmAAagRjip2Qwvrdd7%2BKPHuxN1knI8sc6dJsMnZ73AO6ZYaZ1LNBySR%2BgYAOPwbuYMsyueSi6sdQypZn6g91vlpbY%2Fz%2BM3BYexr1DtmeaONb6ZiXF4k6JQ2kRHBtRzrw0IBMcMCVvd0%2F1pEILYL2ppyJ6ojgSH75HwLqWFLXITi2T11T%2F&X-Amz-Signature=1b25c76bfd00c3856de55f4ef83f52935978f68b81d045318913a9200967e0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
