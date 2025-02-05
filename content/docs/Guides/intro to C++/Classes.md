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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B6JU372%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIB%2Bro9IRCtRZbgy0s9TJh5kOasUFJs%2FHjL8T51EI%2FwrlAiAuuqkcMfjuaWL7wLFMiUSv2QNnTrsdcnkkNaP31%2B%2F2ASr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM0Hvn2LnaT3xeOSlFKtwDLV%2B7K8Wxh1zO%2Be76OfXJVQdZkgcstiMwNpjKdaYJuJgmz1%2BpBVxGlliafkI6vYGAr0wzHgC0p%2FDXuV%2FAVlV0wdaifBfP7S2enmcekEaARPGRcXPLf8xesLqUbWQwBhhahoooDgsdMXypHPXsVItUJh7Hv7opwEGkw2Q7c7IuqK5ZAx%2BNTrT8NCyukVybLDu5ck7gTUMFnMSaJ0ByoGx6X9jKw2HNQTCkWCxixCHaCr1bdvTG0f1i2h8Q85Gi%2FvE%2BExK%2FtntaxgfBswVD6n04Wfl2m%2FupQ9Z%2FyLoJn6KXboSRaBvdjEHIYyR1Ay8lOAwoA1VVCZaPQUjwGkRKGRzBi9g4wJJYKKIqA1uerHEEoE2nH9%2FG1bLVSYTJB%2BxPlWHa3yB6J4%2Bq7vmW0Q2ioYxFq8Q4abJT1Dd6croGbEOdt9YFNGSrChKZFkLtF3drLZQi1qmtPVm%2B2DCLTdJJUD6ylFbJN2uOz2ORs5m81meNb2u8r8FjjZvndAWeBQo79SorNC3KBzirU9uslqtYBhKYC6OxdzHFz6cvsnklG564vyXxu5IMbg9%2FNCqrFAYPw67cUO5wbGOBeuHIlX%2F7ob%2BDUQkRYGe77c2S71ttMVjWDmlDO86xUo%2BvnmB8U14wyOSNvQY6pgFLQB04U8r1cfjYQkBxj7so2wxmdXtGYdsrMrXwAnkjjexbFEXG9ZnjCyYuOC%2BOEh5tZ3OnSYhNZk%2B9DMJzrtRouFYnJAfXfwG4TCZ7VcnEYZojl9VyucBNgfBb4bGCCV3PLyRYiY95xB0HpVA1xP5Fy9EW0K3dAFvrP63fYsUCC6jp212ET%2BV2f5ul5fVOgUYY8G6VSbmEtqbxQ9d8010axh%2FdWaMb&X-Amz-Signature=a9a8b6c479d67d4871b40bdb5ff524fcfd26eb9879df83a3b530edde7b91a621&X-Amz-SignedHeaders=host&x-id=GetObject)

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
