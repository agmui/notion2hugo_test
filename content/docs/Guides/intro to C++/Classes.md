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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3SOC5B%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIAhjDTcD99iLH%2FdS9c1KHgsZsNczyhMEzLsYFNG0%2B9K3AiA%2FCDSE5pK2j2deFAZ9ogf%2B8DF1l%2BOQZUoWIubtTDSqfyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMjJ2vXhLwU%2F7KWxOoKtwD3Z1glNi7UIQrYcWlMyAsr9g67cj5vt1p8TCLJSLQT89ybZY30%2FljatzDQhbDFM8wtswjTleX4SuVTNFzC%2FBrQUf8RYdKnS3qe%2Fj55NnlPqD5cp%2FQcOhC%2FW7P1owHV8ikSXbziRF2JfaLCOlxHU%2F%2BnC47OqLO3P8zSJTQl6P7Q79srMyCudvAE6KTiEmsiP8T3PynnLhg%2FRJOuJHXzgtGjn1I0WdJSCdlLPp4aSQRRDc0%2BvbBW%2BVE2vyTPREzzNKS47Aq0YQjJiiZZ7iaBUKgPX8iGgDtpRh7y2JT2F8mLw3BzWr%2Bm8br%2BnB1SzOcjAsMnC%2FpS9SLk3X1%2BBS4Azf33Vj%2FWBu0XaDIN7gTIVYlZ6UW74yG2YACrUnElBxJFnLCiGmJygr2qwSZtB7%2FeJcIVtT3RZjKdfynB19VqQtklf6r%2BKrozHQk1dmJYT7nuqIv51MTTsg1Qj0dST9TiEfH%2FOZLgmL3jxz0Fz3qhxQ1%2B3daWtXgc1miyTnnMBms2S1VNvLG7%2BP9C79FtBZJpmSzrBQeX1752Ed5WnvwTy7wmVsf47wUdbgQvLKtizZi1j45FlLACH%2FZbJ3yliAtBA%2Fs9A1xkiSCsUvq71oX27OgoGj1MzAKpzA9yTtjyDQwm%2FLs0QY6pgHyGDfyta%2FGaJhPJmWgewCKX8RiOwNtrPAtE1JXjbeKEcbXmcHKoplUX763uMLx7IxQHyTW1El7731c5pXvv9PplvXfQ%2FOWqwFICrTwFSJT2JXrQR3A4sXh3yw7nBn44mHPesPVfZUzB60nvBWtjUsJxTmrz5vel%2BjO2EginxB%2FU5V6t%2BdYmCA4EmOSTika9Wm8PR3Gy572IyRYYnNhR6Ysn7DryK%2Bx&X-Amz-Signature=a23828c837aa1dec2b2c7275ea6f8ff60aa14a807f8fb8faf204dca15ef6a516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
