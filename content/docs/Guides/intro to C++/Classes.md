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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YC24WRI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFCCTIXXcN6jx%2Fi%2FxQxAoLC%2Fct%2Feauaqy1Dud432PtCQIhAOHWMm%2F5MF7K%2F1n40VONijNEP2e%2B8zlTUsYeln3WVJ3BKv8DCHIQABoMNjM3NDIzMTgzODA1Igxbe6RIt%2F8HF0vnLawq3ANedDdnYIKWDOT58jqG2mJaYsRR7cJVlWHRke2dM5W%2BLOAfhycUKOLUygRewtaKRfj0AceGX3EX6WUyOoTfx5UIQC6kCkvJb9oajTiYMdRFJLeIB7MqrroUy6Rse7cOxwIV5IcYMGfkLiowPFSWjCOPwroQOMJJfcZ50m0G0O09Ptpns2B9%2Br2WX7m5wUBQjqpNSqjCePkgQQRcDEztIube72rXmOq7FhRJfKwrro1E3Q%2BBjd%2FTbh2f5qowVO46LoV6uwL5OWHKK63T8IH4e6u1ZBSpv2F0VSzy7%2FpvscYC%2B06DfhvXXUteQLc40TNfdRoWK9PsxPApf54Htb0ffCb5XiSI6zJTzoWIuMLlqp78v039rqWt43jRr6kCRItt9ScWPaer9jHWs9z%2BdWZ%2Fl5D%2BB7zCXB3TG%2BZ%2FjsbZTKxjVog8ggJ0rNpIdztnM5%2BlY66maoDXhnSdMBQHG6Cv8ltQo24Tbrj4QSXYLshJr6o9vjm9V8n12wSau2NYQbj1HQTM6c4sRiXfGhaxHhwOmOCOCnTN8P3%2F94eeyw6ArpMcs8%2BXuBKEPZ6FCh0nn9RAqhCSLbZ4BgCJrbZJGYTCBynd4%2FRaKbldQad0QNlYzK1eD8fIb%2FSUNxIhIacQEDC6%2B4fKBjqkAbpqplAEI1bIWpuCAzmQmYE5FnNElhjQgeuhikwpyr0YhMH8SREiYUXZ6fI8Hamh63Po7IGkhO9X5nyFLFIe0wQfehLTeF1BFQF50Vl4f2%2Bw0KR7IJblEDvGzZUUN5BEYJJGk68mdTD2v7PSQST6x2ge4jCrJrD9JGDXXM5xU4Y790T3yWikjjd4TxoSUkTmIyu3TG5BOpt9gmu%2FCwh2rKfeIfeL&X-Amz-Signature=294409fe22e0d38fae8966a775822d7d1627aeac737e957e8e284081f642049c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
