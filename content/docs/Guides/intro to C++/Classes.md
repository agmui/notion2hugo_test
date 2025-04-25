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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663L6HHDAD%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T121457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHGzaOYNIMXtIaKkYXRBEpuQeWmq8q2xk1zt1nTiVsgHAiEA52lPEKRoHyLcm5HxBkz8VYP9bs0blPJvCsNgFQAhYeYq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHsLznyzNz20R9xUTSrcA1qqoNJoSbSmvu0Can42p%2FgVQT0xVeMSmMLY1nq6AMlBUIclyK3d7vLOf6INVSgZ8P0AxkI%2FoQrVCH8W9BiRpzk92s5RTlnGeYTOMnCPqgwoq0Pqcwlrac1J9T5O4w%2FPYttY%2FvTWNpHDnvSVwZy9IQrRZ9aWe0NWRCLOFIgEQn%2Fb736b4yMk6OuDV1NHYk5Sp01pan3aKtTjD11dRkW8uy4l%2Ffzm1mBRRRLjlwhMt37E6Nv%2BF13Zvg%2Frdhfzjn7X0rVAhZctoVovt%2FK3%2Ftjh0iV0w2QhTR4x2uVPOznZH7ivOsDF2SgurEMidt7kt%2F4XxcZcFP3J8FB0uqPVV5Y%2FC3RdgMbP%2FokB4Fov09sr%2FneKpGJD67YTj3qz3zcdFWwvW034kc2EkyHghujAk2KAasZj%2BFnMLIJzegh4qezAZsTTcJ2mg9VBWUiglxv2hG7Kk8Gh8itiQVYglmOjbq3%2FgCNEgJasjbeBXAyZD%2FxbWE8onCBZlrfSp48WfDn0VvC9t8PHxQvl2GSZ2kUMo90BIZa6VEqmz0UkR0fzZXiijlTp4i6YcHTJaFmcAb2JdgF5xyEur1iqgMHo8lBbAJESq8GqH0a1RCI3WWjeGmlOg4G7iPy1o5TqBAYzbZxWMOHjrcAGOqUBnMAMODdqzqJRijy9WJ3KRu4dEuU5QS11WM%2F2qPkcOn5VqPtpLOAP1rnE1NkysSEY%2FVnZ29uCt0Y0P6zMCKanS0YVpNFvV60Tv%2FCQi5BvqJDSG0L%2BaS%2FZsmmkH0F9JASQOm%2FA3F5sshunINFICPIs8dKVvi8ViuO2xPZYOa%2FrPCWPUd0%2BNZLBFa4NmrphC92v0JvUpwKxnHdGJ6GMd5L%2Bd5kZvToH&X-Amz-Signature=23f6bf14faca48529c21a1e33e4e310c453baef929638735b38057377403a2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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
