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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVK6D324%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T140745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIBnF3%2BBw9e3aDh4Q7VC%2Fh401hTeG3AYOG5Oz800Uc%2FmZAiEAvRRSX7XMgMt05C5SHQRr9lBmZ6OQxb4udt22f0AbTQUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCnOPpw%2BJwQ0gvNSlircAx5M7%2B6KMHu10q06r6czUveSawJ64mN%2FmBVtb78zcNlSyqRJqib%2BkkSH%2Fmwo8iGYR%2Bpd0XEZpn3FQZmiYVcjXxZAwglTzqqUSzvUQSW14X8iB%2FOMUsbBD7bmIdeMdEi%2B8AIaoN4HbsdyE9nNDRbKIlPvNrau57ktSQZWkOqG66O3Y2W%2FejbJGCzLlYiE%2BcxgDrCUeOt9ntzOE%2FwUjhwSdqmPHH8KQFJ7hsrlv9OvxbRShac1WJuuYRaw4QfKVCcK4aE0dhxxBpD8kQIbjpDU5FdxC9Zp5jRu4QnxFydU93KdwE40ntvbhCerF7cEB7z7Brv7z1bYlbPqru87vCKugl66F%2BODDkOrFBOt0XyBX8o%2F%2FGgGKaBrjuK5zN1U47ndwT%2BBLliGEb9YKrNbwz61rMxsLuLR%2BA5CUqNAJvmiKIrObWEFzWfrYuqd7ZUypf8vaDhF0yBR4qaLd9%2Bh6BWryW%2FrtCDmvWowRCre%2Bq4cTDjPJz8QdVgR15iWoFEHaM343zZeK6Gi%2B11SZwGyxpYiunIpCtHxA11FPCuwLirTZyQeI3zjwpeaz4DY54tBIJLijQnxiAKg81XgAVyCMNxd5O082aWz5fpNSKSGYqzKd1a%2FsOi3ft49BMyd%2F3ulMKHNgb4GOqUBG35G1jIn0QoWb9msW3umUNw9ZIlqdcT1HI25LB6%2BpTSYy35hKVcpnHEQcwuSoOkR6b3gW3ltj4kKYYjfsAjwp%2Fd%2FlfqSaAUwCpTzDK4ugwnJMs4aoNRp6K6af8%2Bwuaj5oxFqxo5jHdof5wdvLf2haq8%2FF6BU6V%2FIGY9YpKc5L71qGBQpPC1X5nsj1E9hrKCUHvbrirDOuHRcxQ4IAncXb9sJQvKi&X-Amz-Signature=46c710b155ced1c1746927ff0a8e28dd0d085421b0a730323fdef362eeddd305&X-Amz-SignedHeaders=host&x-id=GetObject)

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
