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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XR6IUSY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFn592cxjdZqZuGxzckXvrxQOmGtD8kUbvp0MI12Ol4TAiEAzshSuHVOu9nnQPQK1EBoOCib963LC5gg8DPb7pX%2FOD8qiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJMTOPISn1m4NA9uUircA14hsSoiYE8%2FP78nmk9h2rrNkniDoIfuUTsU6a0LcxYRnd%2FyeZYyR5KPeVA9XhT54F9D3FvrQYQzhBaZquZ6eGgm%2B8qHYDZmZHBOnOqqLRZ1Ah%2Fm15XxWzvFUil9rl2i8xCfId6moC%2BOSHQX7pl14L5xlE%2FEi3MwN%2BOoXYDxKjT7NywSw0MJARVRaBwRIlHRkZ7Od8NddtAYnHBpbeZPn4zUlUOP%2FuO0PsfenE%2BmE8xsQLK0AMq%2F3BOr%2Bx2M39X2JwocunrYrv1HSVVB2XvAtKigI%2F4qs9MjBxcLCSo7DBg8ELLvZUGNqx5sEhpWFfdLvS55P2QLF%2BXzp1ZNOTZ2ocVF9n6ZZHaIx%2B2VcP9mdu%2BJ20x%2BSLmSX7PchPh8gUoa2oPk4%2BGjAL6SK5JUL3hLQDlhYQhn%2BDe4W9LsHEtud3nowv6vTySjUUei%2Bvsz1qj2hY88P9UBISIK3eHAsexCDiTetzuZz6VNyuk0%2FzXykg9SlSu0DODHeY%2Fe8hanxAPNJ0JUw0d1Od0Tl3eUBHZWFm9o47yht81nBZmPcDyWwJ340jgXBoeQVB5iDD13aoJDShfX%2FBVGeIQgCwqzxgfRNV4xM314iBLIEI93iNVs0My4TQn4mlrYG9APguBjMLLv98AGOqUBPm68Af%2FhySA%2FQDzLDVxwNW9zzvhtiWGzhOkWp29Pp7yHGNe69VST4au%2BNdrP3wqsflHeHYhBPmOd6Ta9AeM3Wxox8qi3NDIeLaz%2FpAG1TTeveC7QWpPqMxYGWy10qlAr2yqybWwTG2kb6M6vqaxRPA06Q4o8OfojcGrFZ3j%2B8yVpwH%2Fi72%2B6PExkcDXrjSfq2tT%2FJCleKtGXlnOXkQvjaPxXUbo9&X-Amz-Signature=84a16c3704166a1756dd3a4adc31a533e78a0ab0501b2ee6df849ceac18d9dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
