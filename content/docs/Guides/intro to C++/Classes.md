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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAGJE4XI%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T131517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIEumbe4H1vO0XLag48%2F44koGYv4oi3kPglo57L%2BtO813AiEA80SvGu0q3IdqxIZIzjHoRXgUhuLHvbuSN%2F28T3PdA0UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOR1lkaKTIDL%2FsW2QCrcA1ww4EoBB7Q5IkLVWefANwWUI%2FMtTBAFeRFF0y79%2FsUMrxAvOYWlJXFqEK8n5hjOZ9BrcCR0PfQ9Mtxp%2FpSFtRoIlASsElMc%2B%2FZjOaUGET0h%2BFl%2FDgqgc4kdLzL%2BK1QFTZOc50gKOyYhGDK2QFZeLBN1EbJvluURLAENcZONIBjG6elWhyyxx9w4F2OVo6fILmiiqyFnwU8ifUmV4gRZ%2BUNwIBK%2BFutPtzoojg5VWe5Y0XBVkQe9u3%2Bq%2BNbaSR%2BCsAPx0V2x02yKAW6g7Imz1OqtCi%2FFUlKK4%2F0q3GS%2Fn2wvk4Lnln4QpzjeoxvZiSWbqvNmrp4lkGH3FOOmo9%2F3nftwpNYNNhaLjfLHbhebi%2BEmKGHX918TRyxP7CIdfLxYM8tT6A3o5V3oF0Lm3WD%2FOmwZ8kjed45Mg1ICAWwi2ETn60l0XWdlW8OgOSNyXc3wjSc01PIrrEmvP1gwdyNaSuHySpod5oHkS0wAdaPyPrsRnMbssA5PBnWrH7cSecZTque5Xvdz77m22JeNiKwgMzxFvcokLd8p0e0nvhS3Tk4%2BJVHm2bhCr7931bXD%2BnyNN10ev963%2FpP7zHzucNaLJktSHS4LJZVrcPTh4EDyFW15Cp8IfhP6MCWWW%2BOnMIqA170GOqUBXn1oeAzUzKjyfQu4oQOPZSc5yySoUfD0%2Bpzf2HHQDp1w91UC87qXe%2FySxowF8kx2lyfCFEBrPVJJb%2BjTcD%2Bm4pwOBCq%2FJDBk6hZY5UVWaAacie8JsebTvvt9suF97Jtu3IxhyGw2%2Bnzsv712TIe1ROFvQYZd6z%2FES6cqYlb79YYhkRlo0TZDfGU4k4kL0LzFbOnMAa0Cg%2FpSj32cS7nL9GlDQdHK&X-Amz-Signature=9309319e5f818238238da3d39683ad014067ca790adcc929d2aa1825e9d06a0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
