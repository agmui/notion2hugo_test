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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NULYZM4%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCcQZgEzWSsVlLw18fkWGeXxqAARn6xOd4NDJ%2FM06sQ3gIhAO8vMe2%2FtuacCIfNw7Im4F6IQkP2vj5jNwzURnnbEyJ3KogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBISG3m7nPFzsQn6Qq3AOztsciTFrhd4IzUHs%2BStFOO1bS5ePMYFSk2y3pr7urSfn59M5MEXCc4lO%2FrdTinyTTAp0EAsZhCQT4dHR7pHJMjl1YypDiHPExpLEquWeG7r%2FAJdmvQvqpojcnG%2FnENcgWDkGItdBpeuFLe2XXhZpVZ3ObB5eZGq5Fw4aDEDsQzgS2v%2FNDR6LwYguWM3YCYloXk8H9cLWAMzSqTX9WaKn2ootTZlWLRZ3oiYMAQv3bOQQa0d8opglkUe%2FHKEewpnS5GEbtjNUG1sT4y5dshAuRPGBRsHFWHrFu4M18VNZMT1txnF3w9dekCKOYgNVSBqKyibLlhs40Oy%2FwZyhfhkQAXAp2t9ZwPpYLPyntyaMJ%2FmrpcCuKoHbOVb8hZRpsflBDENY%2BXYV2k0dz0bbjsdwaonZOYuASvAiMKahHa2KdVseu5x6cG1J1XMaIGx7HPedU%2B9Tp82qOyZps7EkYIi%2F7rPPWbA%2BTo5RksnjULAoEudTsS7RbERUHbCpVWwA2uJEVBkHnis2RUBf0osKLOiHikDTPw301yWrpmsRrFQJDWrTt8OTJtislzURmhpQS4GG%2BcKWPhI2ToUKkVJQ1KUPYkJ0QVXXIh85g7ZbfgtwfMZtdeZ2%2FmyWGI4PyQTCvk7rBBjqkASJWUDZo%2F5Ey%2BVkK2GK2zUpD1p8jrFWH5vOmrSx5jhwTasd5BLB6Gmaft0C4jsDgw5Fq3cuny6LT1p7vEmsK43S%2FjyahnZZFMTAPGsMeGlDXHHpNm4LspVVJxkM0aAb%2BZkKVPaYWmMU%2FdjtJrQkILxtsvQiz%2FHQ4J31Ypnm%2FKnKUAJ9%2FEA%2BWYj8vLvR7DZxejzP%2FDo5cbPkk6JNQqCG%2FObwA1ZwF&X-Amz-Signature=0561add455a2a0d1fafcf7f87f0797ad50a1ae21a8ae978cd329dd200daf2f25&X-Amz-SignedHeaders=host&x-id=GetObject)

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
