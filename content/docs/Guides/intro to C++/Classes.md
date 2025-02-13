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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUPR3ZQH%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T110322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHecQqr3clzfsjGuPSJ4CCHJ1QYzV5L8aR%2B%2BTX6eOPliAiEAsS6D0OlTr86N5nPZO%2BTankmkomVysZB5oqX2UiYrZI0q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDD6KtOfTzCV3fic%2BdSrcA3JFAiV%2F3o98TFz41fRTgp9D5zwUrzhBnJq%2B9AFZ5nXOnNCiKl36QgtjNgPbMHVb%2BAuhlJioHrBHudifWpc%2FN15N5uMYczjvBC4Z81VvTk6KuUhseni6JTdieqg3FM0qDLFH4luWsFgc%2FcrJtZyEqHIF0xPJ%2BP5lJ8e7yFg6RXZunfbd78p81fWj%2F5uiUJyM%2BY6TgxhpkAKagKNgofLu1urrefXodTwTB2oXvyDeIQtyIorvSpt%2BygSeB%2BG5feCe9kx6SXI9IaihutxFTv%2Fc4Y4wFn7sCYXxGdfm1jkOY3u1TLT5osnxgb01eEusvnt%2F7PZU3tKdPVp09S%2F%2F3Ihy4sXJpg5jcY34E1%2B2TCeV9sdUapx3hLbXkom6sxWnkltbfc%2BKkNWiTv3QNrPTkzEKxgk8FF%2ByDmWQrDdOEna9XFGtVOy7aFqPeDBkST6ImUerLfah1gDx494KaxY47U4W2au4nftYUx2l17%2BsD3QoO7YLBiKVKDL9eG62NInuBeU45s4RyPmVlTk4A93qacdzEP%2BCVTHF2ys0xv2VwiDQ6DYVfTbUHoRx1UaylUSIlZKLIMegwMLbrN81r9AokrvRijWyE4i4pvJsf7R4iT1hjKAhFdwstHCnHAlu6QJ0MLqGt70GOqUBfdutDG%2Fi2n1zrrXarYWFSNgRYHb6uKWwFwZ2zndJxQQJSya4w6P%2B5%2BdlgNHP0eE3AbjWeY%2FP7KwLPXYZtJ392uSGe99WwM2UBh6RyvB839c2dZLoJc2EbYwxmpaE5%2FNkAKBKdlt4j%2Becw8Bq38TWPI2eYAfNpGmeYgn%2BboCtiIObj6y%2BW5Q7TU8NRT6P85xMqYAsOLVCBKAFGemEeAf7r1WOL6dG&X-Amz-Signature=ea6b0e14560f6e2967342d0c07b895c26105e76e4cb6d7fa7bc6d051bb2cf725&X-Amz-SignedHeaders=host&x-id=GetObject)

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
