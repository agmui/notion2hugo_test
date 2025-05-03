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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFPRX7EC%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQC2n%2Bsy7UBcWDY3lkjJEAl2XMFcKzdVNdznRLqMWSluVgIhAPAPWzcwuZ6WK6RMWGALksf4FYEwZ5%2FkB0WQJs36Hg0OKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwKZ5yA29dfpqxMayMq3ANGKQrHqJHB8wnvw8FYW5%2F2JUJJtsnN0WNCHUTxuUev6d5tr9k6lUfTesAPy3zYkXQQtwchyENa3OrdJ2qBcDSLvnm0ZzrjVjeHdQPRR1oGEpp%2BL5xLM90%2BoIMfqnXNRve8lZ%2Fy8s5TwWWfL3UDlHNGb1Zb09xi8%2BwYWtS%2F9iHnr%2BzVPPusVj6X5M1N1vwApWiJH9mom%2FGXI9tVcblnw7u9VUUMtOass2O%2FCiwa9b%2BAAkeaHdxSY%2BeOkbYps%2F5jBe7yYvqUofFM7txz%2BHvF1PS4saHnnIKNUCMYSuDvfxUC66QAyyL%2F%2FFnfWFOOgEsNzO6%2FbrtHyrwDlAk0IEbCkzwk8thfv6p1uv5VphXuvGG3b6sQCfTAPxM849%2BCitd8orqHDbyE%2B6L4JA15L5SWm2akvD%2BQHIAsjfLbDmmihwg141PzHOs7hdrNKQ%2BpYOc%2BQpUDaeMXKmpt3jfMGnsgYsOfbo2%2FHF0eKcVTakV0h277oY%2FCMWZetvLToNRyF%2BFEzqVmGLsc8OFCwIe7a%2BH0e3e0LvKNCNAtJPe0MIMMr%2FTsK1cz209jazxN%2FjJIROrfL3rccw8euy%2BL9t%2FNpILTYtNkS4jY5d%2FIbDbNGwX1gEXh5I1GsQwRLzNjVYiTbzCLv9XABjqkAazrNiLTOoEx8fWHbvrBLB1ED%2FvSSQiPOJe0UDaHMvLpljaBHjviLVwgys9HRSRRMvnXV9yGQy178b3ZGW0CAHfVFBm2d8L8twaKMTPbumctgu%2B%2FrtIBlPJO6vmXUTg4lOjWAsJUp74pnqb5pe8V5WR228zmKHO2c2TvoDoBfBkNmRV%2FWt0MdWN66ToIHMQVQ5iCX9ze5EhdayBFVOoiiZBRbFUU&X-Amz-Signature=6f7dd6f29d2f0a7ba6482d1304a352b9f2d6cfbe0ec6ddb2a78b8c12ec46016f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
