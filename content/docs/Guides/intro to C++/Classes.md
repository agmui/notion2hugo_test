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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE3ZUYT2%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHeihc3GdmOcs8V991klPNqx2UNOG37Mp2%2BbnjumZDDnAiAcuSNIB2kMcmbKrygGY1D%2FPpTp%2FZwCEj%2FldNSHM6HC1Sr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMGXtW4OzcEguveUjcKtwDeamuXQlgsBcP7YogIlu2T2XeQ1Fh7zaE8jy1g0JJAZ%2FYMGdE3B5AW1Ws%2Fwckk22cHCvS%2BfVqDUkJ9CV28kELUhVouR6OoOs3%2BUi7bk4WAeFKVVqKU57F%2BGEKFE8hCuPkYTsQR6zQuigV42eCq%2FSkQvsh66K6u5i4SmhOYhONs3WJY9fFg5YXKZ2GRnKWW%2Fb2MyVP9Ut9OwMySdduHw9E2y4rqnhJUcfkNViOiEJe%2Bwlb3EDqpBP4Bw5vas81Q%2Fuq3ZoPK%2Fqs6rbZ4JcDoXJUFWAE02dkvNOcgQAZHwRdDeDrnNh2bsKGmHRLOQyC4H3lCGXjOkDyJ9i28TdR1eRTkhjid5yTJp3DcUMA5keskxx87PfWqsoEIVHO1p4OmJi%2BURl2vQfeTpZfygnB7lnB9cW878%2BvTqXCkmZMqjNoYI9FDuubPHweGGrzAjSTZJEGMnukSe9ot6uEwHARbHo%2FiiJLPjhjcy8J9%2FaQfQJKUh6vh43y8BU41CNMTLStNlqIMiTagNP7u0YuPBBinVxv0LoUyjumDAvG2dKBnpX73h%2Br8zmqGp49T%2FmwMTsQxh6BV%2BkM%2BchkD2WBKgl84WA4qSHK4nZYSeHKPC2hH4C6qEAhHz4Jq1NTvxtkuAEwtLaZvQY6pgErizvztbs26%2B99IQ1pPkXO4rrhXnpM7LW32tYWKWqA18e2t0b0X4hkzi9kkaInxNgFtWjlMB3XgDwUcIgQcAlUpc9N0q%2BHSNdoyIbS28xkYSGa5eVhsxCF7AsIu7l4Z7fDk5h9%2Bs%2FE1OUfcmQV30m4TaehwwANm%2BAu98svvZpeRA1iqDfGDuJaSwkmAg9WHXSHdCFyli8%2FhPAw%2Fz3wJ%2F4JtEhJzYnT&X-Amz-Signature=408bf95c2a578d6016126bfe63ff97890f30c7a64e64d0807c711f0f9b5454d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
