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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KVMEGZ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T081222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFanMtE%2BgIIxVJxLafudl67dYdqVV1Qj7nvQdrxcrnAOAiEAgQl%2FbkRMEwATiTCRYIvKgYiJtF%2FsxkUXWFEciP6Nv%2Bkq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNu1ApC2zHFA%2F3BvlSrcA5y6YBplpChluHKbUx5PYVFZkix8IUjKbWBxEIYQsjJIBD%2F9DHlfDXnoWej3s8BS09JYcSguCD1Qb76yKUD3p%2FL8Cjmsx%2BCW1CTqcWKMV942x5KRcx0D8fwwq7lfPq%2BBMF8Pj%2F%2FvH0IA7ToTKNyJtWDDFIuYzdH0boRKZWXYuj%2FEXoHmPOZXfE%2Fo4GTom0IODPAPnzBkauJG9VfjsbwIsRGd1Ab9GP5EGp5mJ48CBrv9mWomzZ3k%2Bwp8QOkfbA1VXhV7qKyYlLGcb9t310mQuqQHrKL5S68Ia0Bby0K4P%2FfQW7WwQptFt2TOl3f5Qgd9ffU%2BDo2eES8HqSh2RcprqFvM3gp%2Fc6NClSCT%2BYImh1bpEYuxvaFUug%2B0rrj9TXEm5UmXt1NvArDVpxTxTCoRrenI0OocOxiMOpKRREMXmq9XQPsJfLVhksEOTdDDvH0lIzz5lZlCWV5UTcYy45wFmUigX8RjJBNR86yD6aJAHq4CKHinWLD3xrbHnf7AY5%2BnJv288aYZcSqsv8n%2FHNg4m%2BdHxP3EqcAGUTMH1Plb7ye4lFU0mAIFZb%2BchtPCJYNP1ym76uxpHSYi24bCQOvZAG66jtwx2LcIghubLbz%2F5aDsq9%2FG5XBM%2FC7tWuTrMKvTm8EGOqUBTTQmJN81tqeQaqw5w32RNT0QCpMy2yEIuT1akhay27yMQvjzxEBBy1eCuDuPI6HxSP1PVxC6YCymqPeBIO5PlBr9Hv3hLzuOWb7YPoiOTdlQed6fB75W1Zrhn%2BDL6VMyUxeg7VWWQroDK7GJOQJbEkhPf2RPU0BVZDPavO2zQ1163pyEObDQOwVVtgXCk3hHHhsUUkHjH3HDABVYN3KnRQSU3nCQ&X-Amz-Signature=e29f78b615be81395b48b6e69afa89feb38edd37cc105da61365dbce183cab53&X-Amz-SignedHeaders=host&x-id=GetObject)

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
