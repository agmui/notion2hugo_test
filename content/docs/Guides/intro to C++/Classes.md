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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7SYOBGI%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T133126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDUvOeeVB%2FNeFaJxQeNAgTXAvq2gonsYgTl4hRAr2ESxgIhAK%2B6cL3Sl8yTB8YaZYD4LrYnormo7YpaqmKqj%2FUyUeUCKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfQhRCSiEKw224kikq3APXG155JSum2s4E97iOJR0q%2B3Ddbr7Er5CFBaP4raHUEDQfN4OMel7lTD72D1iwD85eR48mSpBV8pLo8tCWoi0ke21LCvpP%2BYitcia2fpTPzSxq9RjnxnqIO3VHQnM8QuHRHk1N03csS8jazjM6dAg2XvSbU2BQhGfolOSbJcQMp%2FPIvJGktqKyN6j4Abx5PJ9ltoutG9aJX5%2B5S9m3GuxYbr0FtdyxjdWjKlZnhLk3LaNTJqu%2FIePaqonLkf9C5Eq9ti2Hid0rE4g%2BBES%2BcsRA7UMIoqUbb3%2FgHBYg0w6O0baB4wjBK6i4AiotbtgQT8op3ejduSQWjADjrAoJbVAAcVcWVEAIInlY9wymuvG1OR7P6xmYfxx5%2BN%2Fcc6AKkH1UKsLpGSLYxCIrdkGYOiPOy%2FtLaioHbt594hJNi07p5hUqTOgsy25bwigVfXkFoMm9K6XEj7VyzSl6vSVnLNUyGnW%2FZx0XmPHQPMfoKKBClSnwf8VlZA3emDzrjOGsDjBHVan%2BhGfRXW85%2B55N6h701SMcpFOHu5gZouDNCxgDPo0V5PE5WUB3TSTMfxqqALov16aQRAwkBtcwrXQPCluIxH5nPPI%2FCM9Kz%2BPtYbIs6meGYeSkjiEx%2F2kOUjCi29fEBjqkAZFRq6vyFEyQpYRPK%2FbMmMLguMNFtBrSjhG4omuPRgP9XA6ZN3SmHlPHkvPm1vBS4%2BdufrWh5v54elgyJ9KSOoL8H2IUi82NLxx%2BDCbaVBhohjkxkVFEkLO%2BDTCLNPcRGqM4k5p4Ei98yJjazcSV6cfr%2F1gKbMLHEeLM89ZCGdIxmxsQsLwtLQ%2B8cEwk3boU47947oV9pSxrBsP%2BoWH%2BPKf4HpC%2F&X-Amz-Signature=7e52c1a2577952e50826d6e7546f0469aeab4086a6c725ebab2bb2f2eb3f537b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
