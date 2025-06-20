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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFRXUZPE%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T132344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdcwTBB36aP1cVW3zcuVEJdGAaeDIFibU9drqxrV8kuQIhAI9fgKmIrCFJGd6BzaN8yRAf03EvfJB7V2OMMTokPJ48KogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8h8NplSlVCdkLLa8q3APVFsVlScoLAZE7dIwIJIH5QK30K1XeQuIJxUTBKnTGqSmiCHSzLPNM4W3PzrvyRaI88aEiie13afNbPV61J6LEm5Oz9N7KRIq356qPBeHgL5PoqstYcP6X8rWJyuuAguYTvhplUmmwWPpcFfjc4A7iap%2Fz8N%2FbEaDi%2F3y4BNchSMqXLGMBBW%2B9Vtoni7jCI5RY7Q3Bo9N8iaRBg%2B04FOLuXNtxwws%2Bt4GgPRYmFNAk5DHo9HZROZe1%2FFUWw%2Bff2tcBv1bioHMyscq%2B8Il6RRSvTk81gjsYVRzZGeizyDdfWQo0nAG1XHOMkxrLLMYFfKAf6Re%2BYF9o%2BOjFqPhD%2FQe6qx0ekFaV6EM82%2BSnHiFkOjFPiUs0ziMfsOxp3qic%2BG9YtPt81R39r9tmFj6AhHMJ1J%2FJGRSsyAe8VCfsJbSpNbTzwLOTffxmzFUSA3uNcLuYkggb7HAtmzaOJitzaS%2FFiBXuz4L95u5hoo7o2pYE3omHtJH7MycsJecr6psnQJOJQJojIUJ3qqgdDsQEpLV%2FLRwZ%2BlD8Eowl%2F5YexLSv9z6YxkA0jNW2MYp9mVeDzp%2FDqKo8B5GK9cTd5Lfi7jUM0O57Rqr4XG%2BumPYg9zOE40EcXMo65ThqNTRKrDDTpNXCBjqkAcJlTRsoRE%2FrW5TeyZ0me78s6Zrt7J%2BgOzjlOVVhKxcLTJsRLDN8Cb1wNVLfC5%2Bteug7UmmjIWn13BimvzbjyFVe2FQ0TRVaOZybmHnahGEhgEmHxIOpf1PVPwftOdLj4c4uhlc9I%2FDROI%2BN4T%2FM%2F7VD3qXTLE27S9WkPqINCDM2Sh1pXXW5MiVcR74casQ1GnozU9wF6b4TkJiqNzwk4SL4bOLl&X-Amz-Signature=30f29479a41b08f8ff90717215c12183c2e4c280c3717e241261e7b22f3a2962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
