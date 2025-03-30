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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4UIZYK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIAYJizttS3lBV5Aa3Lm0w%2BUlVAdbU3it5E3sv37u5t4KAiBxuEK%2BRm%2FEAZgBG%2FI6x9Yh6YCNqtNLIyu%2BMcox0pqLoSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF2t67hPi%2FNECaMNHKtwD18bYuE3h4cn7hcJO8mD7zTn3c%2FM23xNSAlwtHfxcWtgHBpGfgOQbxqGal7TkeF2OJ6O01k1yJdWFZ5HanY7LEQBzsSCRxsyrKtV0IRZLYAE8HuovUtrvUFzc%2Fg5edgPtJC0%2FBJMQ1fgm9MIJh4GKzCsIscQpiryFMXaX8cC1btLEdV1BlQ2lF5P6BavZpZ8k2HGHO%2BXJ39DQ2SDFpZTJwSap1CFumVhZivxV7sZt9Y4gS0n7l7VS8m68kZQZzUg%2BPQEnBHpUAw7upwx8fh60KI%2BFOy6YQJ6nJR1U7b8jKVQAHFuVh%2FdT5Ivnx%2B5%2BhGvtd8vs3jNZ5z0ZA1BMVMwOmQsjpirWtK6KUTVvnVlA0Z4wMmA06q7BLLFx3Uuw%2BBI%2BTZCIupx6Jhwr9miZdn3Gz7kcShibqJOewM0C5xDgNn6tX5Adm%2BI43P47IgSjZxSq3wNqB9cMWTdQ%2BcS%2BMyIC8FX9FfxQV5Fn2bPgY7nlLBCKYeyCef6UFYXPYUNRxXm1K7AXBZvQENq9nho%2BoGIhwNuD7tC0IGWSCYJS1LsPmzEYpLe2ioXpgDGXyepBmr73hY9iwIhljK1k2Q559h5zksTZjl%2FigLFp6Tbrb1PcwbI2WyGwlhHxMCZkrakwmvCjvwY6pgHF5aRemZ%2BClTA3%2FSBNfAXiPsBjtZEx5AZwhURORhaJ4L0%2FprgwtJqphw0hqe3VjZtGrMusHx6fELQRsTzhWEqBUogcjip4p0N30h7xVyLh%2Fgn4klnY6BpweZUuHzfpth4ftJ26UurujkjulvAgtR7oEtM5q%2Fi%2FFoGCy%2ByHVaJHVfDjyn8QmOA4qzjSNvkmKOXmshTmpBpew4tEYrvfeSTecKgYj%2BW%2F&X-Amz-Signature=b7aa6aa75580c374b79149f747f9670e6a56c27388a463861f8ac535f4b9f156&X-Amz-SignedHeaders=host&x-id=GetObject)

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
