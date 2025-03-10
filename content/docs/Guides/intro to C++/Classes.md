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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S32CCFDN%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T220731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIE3F0%2BduByfaU9IiUG993vdaqrLkK4cmUNcGtoNipTQYAiEAqiudVcjJZ%2BV36ba%2Fc%2BrpYgdMLdA0Ol19mH42YfoYj8wqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGzN6wtOcSwG463xSrcAwlKFqldv9zHDGqNnFHIPKsMqmwVq56fvdI4Vdr0eWpJpOwXtxkTHbf5IRrdrvlpkIeMlhWQhv09mDMxPC252YASmwTrt1LjpnV53wzXOM1J9%2B1osMzRdUeXDxPUBKbcht1OqEWrBHKlnaW0dEOAEYpEU8HYUy1xDAFCj9ubas47UusL99QHRlhHTYLXw10EGsdjzer%2F0u0zK6ihb5DRr1XwbUo5gRY718O3eQ6%2BER3gw%2BTEASKnOCupBq2Ly2L1wL00h%2FOFEZZNjnAc%2F1Yv5gVz4CH7ukpV3Z6Die0O5WLqlEIIVXuHOYeOSk6OQllf01KMECafz%2BnlaSx7GZt3IJ%2BMUVhdh0mt7fOMSrqgfQot%2FIfdBgDZM%2BcNyvjXgZiOdCtvTFhohBUKYkz9oA9RCdZCnSHsuPr5AMe7F2B6fQsCalJj2KWomKgR%2Fjn4xNJMflWEWpsN9cibqNQqe8XHrwFK%2BBAVj80iCu4LF4g2g2hA1v%2FfWprSceigCuWsJter0%2FbZLIbsbgwBzalzsY5YP2%2B8bW%2FCk8fnf%2FKFNDMLCfN47gJNcvsRQesJ%2B6SW5IG%2FrfUMMZvumnDdQvGsgQ%2FuQ1W63T6xJd3aQkSXx3kawcUhgYLrHe7Glp%2Bkt3BPMMWsvb4GOqUBBZAL%2BHbZq7A%2FadUj%2FHxWmdQxNbR5D%2Fo0QaiMsX8jHv0RMG5y2r%2BSeSVathJtZrUh1odg9Zwiw0NApXwvS%2BD9uhtWW76JXPGqfhGr9c%2FraacSRvGRN4MTu1BHQT%2FnPXsnYp9wobpNJwOcqSA3jInOBrdm4XEuJCQqcmxsMpnSkiacdcUUf7wkPa8svQw3u42rlFEdEWyjy5DElg84u1nlZZG7EO5F&X-Amz-Signature=815ca714ada397d402823a4e3dc89f8ed8f1bf63d14dd56cc52bb68d0a03e807&X-Amz-SignedHeaders=host&x-id=GetObject)

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
