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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNX3K6QW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeSisvNR0Qt1z5Aa%2FC8O1ySpT8NDGOTTZKDDqJonjQrAiEA%2FyLhq2s9x2%2BzsO8ZUpPB35iUENIJGsWigJ2u3zgxIjAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGWgVvGiaZ%2F32zdF1yrcA2PnV8hnzyvNeF3OP4YqZngBaPsrk2ok%2BIE0E5%2F3CwXlkCququxZqnnVIw1mfjQr6cT%2F28CK%2BKnoqnzXOPal0yVQa3vkce6Rhigzi3jvLVDCnV3dyGbXgP2Ug%2BNlPQntD8P36JkrO4H1WGjv%2BzgOfCt69sjqElRGe%2B8b1uJpkBuB%2BDWLev4wS6cRCkYQslvAYvm9omBUapO1OzutI0RZFz3HzLDDocsUrGEX7nxb2%2FXC81BH0zZh6u%2FS74md%2FN0tRNJnUczGh%2F8ruvCncHXHa%2FnMj9tSkeuQ%2FOPAibFzkR1kaWOBBw6WD1IPayYqshTJ2vlRfL2wFihMrgu0v%2BZTv9HEbmWwoHn933fAMm5qQnavRCOjSo632aTOABb%2BdYOgt3iaVO6H489xq0GggvDtDfi0We91e8jldN%2Fqt%2FfAS6aBULf0AfNWRWV67sCqYfu7hyRo%2BlxWIIHwhRyn%2BFHDnSyQb6iTu9ax32f5P7a3RPHfaWFvXOSE2g0Co58y6jV6tEqMIoGRdIrtaou7Ia6smymQLDt0DWse2pHoviCz441v%2BM7Iw066vOwtVxwHmmG8pNrUzq98iKlTpsbPfexdFQ%2BerQPdNKm%2B2Ww8DDT04DGTiJ6YdJb2jsn1sAiVMLKXysMGOqUBsnXUYybpbUme5%2FCe224XfZMAH1dYg5hMvaKTL9PHFlWNagF4ZAZAPwEo857qYPBFZTlEy9%2BTzdQdiZ6zxmN4BdBa5Lx3l5OZ6C1qzlbagAUQhmZkduN%2B0WWzQZJ2qiAmst564Q4J7KfDKAzWwcyWSEMrgYzegiyxGxciTr5%2B9NYasbafD1d9bN5wxwrbKq8pDypbC5Hr0WgRVTAEeUBCeg3BJ62t&X-Amz-Signature=bd2f91a97f71f35b1d7689885a667d1414ab492717c4e11095060575f4cb07f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
