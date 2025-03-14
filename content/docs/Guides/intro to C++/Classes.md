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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTQNOR5E%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnfqCcW%2FGxubKwL6pTjeNzeqa9J8UC17kogjU1LwCBgwIhAIvR62sCNaVaDIy%2BayjyF%2Fr%2BVkoaKD5PT4iDtD2SO5RRKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwiuPY6P4d3%2Fe4uNEMq3AOXex%2Bw7Sf2aGomjdpu7qZlKabmJhG3sJpLd5m4dNJ%2B9jR6qPOCxJpgi4beso3Gelau3uHwP910DXmvlPWjpmCmTaXorKf4kGguSEj4gTmlxv2Wrm5I%2FdDAtQVuUU5hS8cn85iAPSsJ%2F5IBkhcP%2BJ9l7g3sIRMV0JukhzSV5G8S9HPYz4DTqkePMJLKv7MIiyBOJOHOvZKGDbdi2SHI6Yfoaax5494pOwERYMiaPmuwSxHU3u57UnaC33kCwe20yPE1gq66YZSPjZsfo89nmGpXqfXtkDkREd7ocDiB%2FwWQd2LvDFL07YP6Ev2dQI2ULnB0cvJX3VTXILQTXfiXkpTcjVVu%2F34xzhQ8r8hrT1KzC8A%2FJhpuKilUdiYS5ahVOEYq9tDnACzceur8OejSJLQt5KpmrnxcQZMLFMv032wwY6kfgR1qnK450OPy33%2Bw00SC176ZSENrOxtsdBlToiSpBU4QcsPennXQs1zWKEi0UpNMNFU%2BYOkTytQafmRKMAEJd%2FUEev5dztq3gZXUfN61jQImJ8YtJ4tX1UcllaWc2hSu5fqQgZy%2BKUUIfoUh10Rofq7x0O85Q6TZiud9W%2F0%2FCfHEUh%2BDdy%2Bdqp8pJuPtzQXUuaBtZf7pLuODTDDkv9G%2BBjqkATSsULctLN%2BynNpV1I32NjiobqvnRXk3kYfLYaoEzgCfH8xBEqb6kMAkvsep96obHgBbLfyQEDyemzwBnoP3dWu4uy4y5TUD1FoLUlG2DVdmzWqd22jCIEeyeOowMUeh77vw4ORpaWGWtRb%2BvU08qg7EgDFAp6R0hXdg2yiIjVdQBXNkgfPjKLEoFBHfOqjLmXIN0IKxx1To7pSRTgUzlefl1ADT&X-Amz-Signature=daa3f86aa6aed22e0e34f4358c45c20fcf0916b44f1c5c93928650593b6bcc45&X-Amz-SignedHeaders=host&x-id=GetObject)

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
