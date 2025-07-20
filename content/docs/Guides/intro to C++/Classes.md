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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MMOTIDP%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T220822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB7mI1ReHc1c%2FPdoGY7A3%2FVut23FpLMLXXLVjamnLcYnAiEAgWXHMnJH2flxFaBiWEMXBhvQElhhSpWV03cgW7E7DBkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIW9mOWF5lBQ4NOvFircA4CnQgEAH8tFpIIEcUQlzTxOwLdggMBC%2B1rhmwNZjKK8LN%2B9JZlyLGxI7TWeaUM5kV5oh7HKd%2FniDV0jg%2FeqFfGwKS8LasPbefUn4Fo%2Flul9LtDAYqdEBeTqNpgKbrRqZUPYtAuHvf89FD%2B91tF1noBlK4F%2Fn6DgXpF0Hm3RgmuwXXBaMlC4gjBso3hwAAagkO%2BWGFc495Bp1u3QriRLIec2m%2FhH%2BSi7hcyteThG3cLIGY4OphOsYN9owD4O3RJsqIwdb010w7x5EiZy7Q7VRJemCBd4c887XEOS6%2FEes5jwePCeW%2F6Q9cUDAe0HfUYnuuIH8j8aGqgGY%2F5Mr1hF5bQinMhPs4xSeh9nxgO89qFBTf4M0GSDpwT1t3IzHYNRV4ijTePtfaWidzqqGCcQe32an%2FsrdvX%2BSCSh4p1yysQFd1Fk75M5T4wtCwaWBRzbjK%2FhxSVr9TrWiNELdUuZ%2BIdza2bqIInP3RclH%2B8Ri7l2UZgd7OnUXe949S3vRMR43GyUrG1XHpXOZajYXN75nJUWeRZH7%2BzhM952mGtykyXRGHvCtodlcKPaBcD75wJjYhlilymnXnIKOdoRek78ADNYWuoD%2BM%2FVMfzSJ6B1iZKSoUDupsUlV8rmVMqOMM3v9MMGOqUBLV61IUVEmnxlNfKvQGoKNJlC8CQsGqmNV98hNXH40kxXmWxk51s4%2FR6FqonSD632JIzrupT%2FKPK1BIcT9NBZy61cp1tcTC4AnBPGIHqu6DBhonV11xrfiwliQ0duqViCO%2B5%2FhzvfaWOqtokx0Wp126k7vEk%2Fl3LnpFBsSj7Eu1HAZsVRWo3J2J%2B%2BAw2Vxc4dnv8G6VliUnyW%2BiZ1D3GYD4COCPr8&X-Amz-Signature=b463f517817d7df5dd834637ed35f4b73ab86a3e19577f659e7ff5d8f962406a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
