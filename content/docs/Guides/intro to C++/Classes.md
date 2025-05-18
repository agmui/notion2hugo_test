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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCRAD7I%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T004459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClmq8K0bHcqtj0Hlm0iHWdPiag9oJ%2BYLBS2qnSYk%2B5jgIgbcR2fpAgv5dc6DXqfON4qv0ihzN2EcZcXOg1pJ1bi9Aq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDLHkc2%2BCvzLAlVm9yCrcAyZmWAUTRXn4ibPsoPILBkeuV%2Bts9mKZBJfRvZmbj9vdTSiv5F6sewiOoOmW32QsqbAYo8vmDb88iA9N1SJhD5O9LcTMAYVXi%2FZcG8BfgeAdhgIZqgBkfURLkUky8bKIm3s1fp2fPf25bQJ11yEDJpktj%2Be7K8rsnceTzPArbDGEQ%2BsQcuvzzVjWnLLWbQUd0ZTERNiZgN1pfXQYl3pDO09038zc4vvYQU1wEoTHPUyx8pHJJia5QfilJUmIL%2B0SCsLAvBTh1zk3UalCx%2B%2FBStFfnF5hFnaWPTpFX%2FSayyKOGbmbXFQpkv%2BzNIy4m6bVDWZgH4QPiYo%2BlE9ur%2BgB1SZJBqjdfVUcuRhJANvfTRyzD5SpKLWIvzHjjJXwQz%2FhYEFvUyExQ09OPhcTIHvuMvIRXlbIpzJLCDF%2BnveI5cLw%2B8cQRsfE%2FJNEhTov9nuILxIPZxJTHTNNOkVZL5GufQn3Og5tc654kdZpMz3lXyQE%2FE5FPT4Ly%2Bjggr%2BV0lOTUBQCPPorAtK5HmTCghlZuajTB6TwrsWYXXgSIB2IWWeklmRndu%2BkSgezcEyD735ZKXKvInTveedJO3E%2FEkPD%2F6DDcwk3XWW%2B9G3bSy8iuaUUI8dotMWSMkINEASXMPDXpMEGOqUBOkiVAqnnjjtvpc4pQNDSMwId7dGDZ9mHVXTea3EtzbSXEIZZ6fI80yTtLqvEfDObtDFkbZ1ZjhUIpM7BYF0MmZTbbZ85BAobDRW4TXDgZF7mev0gtkeHl6aPQpAtupSUAXNUwo1aEJskfgIg%2B21J%2BtbRIG02QgpyBQ7Sw01suS9bxhIlQopBOZS2BfjISDnxhJDIrY%2BM9iiSw1zBE253xptpgnTk&X-Amz-Signature=f73f1b865a523a0084a0fc7e9774c69d412e33416d917fe4b84d64ea36875c88&X-Amz-SignedHeaders=host&x-id=GetObject)

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
