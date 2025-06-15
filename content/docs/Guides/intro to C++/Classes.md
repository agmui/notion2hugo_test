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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GH6BNMB%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCfhYrioGaiK71vSrsIRxCQv9u%2Fe%2BQoibfqL0o65DEGMgIgSBw3qrEJjjrzZyFc4CKeUQ5ayBcsrfHaPnEJBwe3CCcq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDLVOt%2F2LFc10LWzvFCrcA7qmm1BBmxnshgNFPNJM53md%2Fwr9Y%2Fjb7H7FZXip%2FJ7m4cMuSZTCmfE2WuLutCv6iyrj4Gq1I0Gabd6KCFmleOAa7aIruexeuREymgjDrTs0aV2NUmfDIL5sC1jF6wcDwAyMzEA6se2U9LldOvteKUYq6z%2BViGiQIhoaRf%2FW%2BVGc3H09Pn%2FXsPjGIAJLIgYDTx4Foz1yWqfGG51z7WQjJI%2FeypA15jFnaTyiWFgteTFPyc8P2Vv02EDHPeRfGpDoLI79EkiXF3h4tpLi1EOTeDe7%2BXwBiFO8g5Mu6ntGICHS%2FhQTidCto%2F59xOvYlXu2VEblVf63wFwkW5eo6TJFE0QlcAW5PTtvDvAMKnPlSExKz4buZ2lSZxpf%2Fuigerag1NzKI2yAcGVsyFRHgGxFSovqnCADg8YPzU%2BldtON74fU2fghElT7cztTCYvvbcJUNXww%2F8UGQ8%2FuHA9IYfGgPI6zsGQdZtFkKvaxnVeedaRaFpg5N6GSn%2Fa3pLMlQAjATfLMorcjeEfGt%2Bq4vR023Aj3%2F2mpoNxuQ2HFVktgPMty%2FKnDI7uSXaOyVs%2FDCyNVw0fNIQwVrzq2DqKk4COns5OFzdjd15zUCxlM4G0AGu0qGnjNVMmXiBbvCD7cMJGtucIGOqUBSiIpdiI20OkQCYLwWmSCTqkrJ58YyM6ZVdjD6GiO684GAwaAinjM%2B0bOd1ESxP8kRvT555snpxSiG4zI8%2BALXVptYsz3V%2Fpe%2FoTZwtDWuIyfi9ddbwYOon2ghzpXlIAl0W8QuqyYFTI3MT4webUlFvOsBCZRJCLcR8slvTpcZKTygFkUgiOM%2FDXMVlg99mWfD5oixhgItiPbjfDwM5ZWzoLCCTCh&X-Amz-Signature=2d305fea5806ec7e150009d3ed6b82060059412a4fc7ac04ff570b1d48a6e052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
