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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSOBOE2L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T015727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIDq2BCqQfsq%2FoE%2FVEnMijtxQy99%2BnUBaLaHO7AhUPTsfAiEAqYcUHfC9fdLNn03wAIsyAQViffIccrVT3eGmYVs2iZUqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGPl9PeJLFZ3z8OHSrcA2rJenn3yyxilsxMhK0Dn8Ta%2FjmZWBb%2BzXGqdIjKwqB7sXjxxr%2BSVpGlscC7YYQOa%2BPDfJWEhQ9J6Hnzry1ZuEgznTdMkngGlS%2FP1HMSKxxFxizNPgpDeDY8mCTu81fUlzb41sw34rFzueL8R%2Bmy%2BHep2rmtmL6fChg9Ik%2BwU6jNBC1xg%2B1U8ODFUHVNqwzwiIuuWnehGNiN5suO366pisOoBfkZJYGcaM%2BQ3o%2BQ%2BV8lhuSBNUhZAYbY71f2l6Keqk%2Bw3%2FIK02%2BQ2JC5BLyt2JzwOTblHn2UCtryjAmfCM%2F%2FQOhyUYGprhFbJAqZRxewOBTmB18bglmcVGDMaY%2FU3BTo8xedfQwcJT8tC1FQDuDefVA9BCeCKDFF7ZZBA88BzswN2LAVcWoWUCnG1LTWYa6gZg%2BzuyZuggW8FG3QR7iFk6P%2F8oSlpNON8DGJyEspf0ESGBsL67xCDo8mpJzJvHlEjqVATULPqiCqTra8yLYQOj8b3kvQFKQUCF%2Fig2gEUekQSDOgP8gnE%2FEJ64tk1x00nD2%2B%2F4wcl6I2kecAg%2BhQNYwFrWuya0%2FnbRvRB5QjccN%2BXS8CfV6LIlFTfUwaYkxEiZJw%2FmLk2B3QLnA0bkCw8Rd7SvR3kqj%2B83y7MOf6uL4GOqUBXiZRLMEBXWFDbcdVyYihzXJQza4bUSn2CbmTbN6ajPTgmZOlumlwdKH5qtsRSVsB4bG3Oe%2FwijPf8rIkz%2BNv5gNokYbvUnrotbf%2FzlkD%2BCwg0R1k5aA0iVFfwPV0ghtTIBDIm0LPh%2FsZVKrK%2FKW8%2Fs8K8EZ05iTypKzVpikkqOMU3gdOLp5qDnGbjPSTfqCiB0F8ZFS8ydAfDP1nxRVOE43rnjMD&X-Amz-Signature=b4aa949f3f182f8f4de5ea7298d7271c6e73027fe276f3dd03b2ef358470ff2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
