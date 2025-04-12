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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRFSCPK%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRFhFqDdUjM8lDpmHkzq2gpcx45aXmRVYVqi06HIQemwIgLQ62G6BZKxfQMo2gtASaN82yanBXtvQWDEinku4XWqMqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwPI171hcvTlUtWLSrcA%2FtHA62fGr57FbfjiKQTml3oW2cuUhQG4F6rqKbZRGqlGA46eW%2FGm5z93giSecPRMQ93K%2BMx18whElziefu5J4AOrX7fFajWRDj5KSiglJtYfxiThLfZPpkKgxkVQRHgrfJt1Kf9HdcxwYz%2BaJ5Xi%2FJo23loCKwugW5P5qRdLuz3jRLcFx4gzAnjxuZaEHQVzkyIXI1UBe8Kx5wyOrzl5rgDGxxSbWZk6tplrvjlQaW68C1p%2Ba%2F3fdogSesh094MDssE0ZdHwGhb1HAod7y7tC1ZI96m6rx%2F538T1yy68PoGRjyHEKwvH5pOQjVouv%2BX8SFerHe7c2H8F4EQ61QLs%2F%2BX%2FF5u9nLnCSxsy%2BuOgaUwCdqJh5DxY%2F6eY%2FKhOZV1fyMXldjk2P%2BfhTEZAsiAgqNr0eYreitNh332NsicIQnb%2BEcqS46q%2Bxwp8lc81jUt6I0uuERRrZjQX4VeBIXMMzMfsq%2BLBrVa35Y06symXHHAZRz%2FOZ7TD4LF18QKeAzK9rG80vF2HDMTSl4gxgDL1DQFvrXJMs1R4nZPXHGRWAUESN21%2FPQZ9MwyzVPcpkhQaMlqt5YgZaAXFgNAcgKTpJEubyDly0XAP87SQhBAkyEdGRw%2BSw%2BYdCsv8gZxMO2E578GOqUBZOMadxGod5YGrqkOJvRQgg5F68DT95SnbemnNqJXiG1aLLAxJqv7za49M8rp43vgB%2BOHabKvPBzh5MrT3t4aac%2Bw3GOXRirXT5947p6wHv9lkpuY1apzpD%2FDspILf7UBpkcB%2FYR77XNP9j7pKBH9Y2qIyHjaQn%2FUiE%2BHZ6AD63bRCZihQr4Anmn53%2BV7DE6oG1n6v4Os0wdLnlvyY%2FjLn0P7VFs9&X-Amz-Signature=8a32d889dde3370a4cd11097a6fcf1e9273f49ed316308d5c70f029c044150c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
