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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDNNPH6T%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZSQmcv0fKQs9v6K5x%2Fy8z6Clr7OFB7DSmTi7%2Fl3TJJAIhAJlTGoD2xBR0JtbgSIAFOAcX1fRuqrh2Y%2FXIu1Vs7fZrKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQeRNyTlNeUCWG4Okq3ANTkSnQW9%2BvGHNm89ZWcb6fTSvXNm8hUGUubateEwsWYGOYL5hro6H%2BeCcdd%2BQ5EdiZvxna9g%2BQyrXJMoMerGUCNH9y%2FCppigjV8tL98Hndfz4MSqg9lc1exZaGNdZnDUMzMtVTTUDF67VixEebuXDyx3iKUkhlAbqr60MPylinaZ6bsqtYs6FclDl248tnDWF%2BB3wV2bbYHk6%2FT54mOS%2BwFxCUNp0a2w9Qe6AiMN1hPd21TkYyehv4iU%2FXzLc1vggpjT0z15baEPn%2B%2FUjq5fAPXw6XeNJBY8szO8JyO9LqtmPrvpfLwM%2FYG6pgsEULAg%2B0dXouQcwACJ4rsRSEAAF19rgQFaczd9i1BCkkiq5dTwQLJn3xJILCd0PhcZbCx6UgCHxZPasEtsLZa10tOayeSJfMYfFerQO%2BsvvCmW9ejV7u8XsaZ6tkqgy8nGk1366jp7fVF1%2FtVGPrHvUjcsSyN0J%2FE5n55I6okT6ycTBeUuPbVRVTonNiJT6PYAcu1D8M64pLfBpytaZnMDuI2ENgKzw9zVXv4wSY2V7rbTKpcv2WeQrlC14icEVjx%2Fp3oN55LLo%2Fq%2FtE4FFs4DEIirPDcQFDv%2FUPJVASTJExzWU%2FwxUyva46jdVP0uYP0TCV0d29BjqkAdEKcBBZVafeKsv3Ms%2FIPgyL1ukku%2F0lsMv5VMrmmomB35I1dWhbfNLQjcMY1A%2B3yiFoQMc%2FLAyrFiTRxaSfi2vkYwMMIQkK7nTNDBOZzrU6flg5LPjgG%2Bdj%2FV8mL%2BqoeWBExjWl3yFopOZzS%2FO1LPTEuvI8bMGw54AmDFdAO8Pkojqy9Lej%2B3ytQINjG5dx%2Fagp6HXZGTQ6MWDK6e2sGP9nGAM0&X-Amz-Signature=17d18b76f96a441a94a078aa59fd8953717f36751a252241e125e1acc154a85e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
