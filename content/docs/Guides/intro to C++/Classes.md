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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTJBXUFH%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIEr4feacWM%2F8vCwcAXGwEyngCm6ada%2BuMaFAIQlKZpgYAiAOjkIXSnM8fGe11U3srFukOWEYVgscFjzFYIrNIk8dWiqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHjwO7myaNetYbAHoKtwDVUcanCslvo%2FkiBj9EJB2Vzpv1p3OtYkakbiIGkh67yxJjh7T51Yat8fSltG%2FTETZzqlLNWb%2FeC0a4cCcMCJbjcZB1XD31LaODHHs5ZKMq9kEenDcljpmmsl66yJi0M6dSGpgdOGNVnUe2eYc6h3qpJ9ad%2FVPal9x7KEK7gY0XwhIMA5u4vKjlx7Lo56it4kPOq2oVquvJY89xK2Bs8cU%2B2vnEWEv8%2F4Klo2U7I%2BmghZpMZ2iKGzEZhbIzMjjPjaSfLLF%2BdjHlYTtY5mEu6DJUw%2BI1Fzt%2FU9dOPmwpPjaFQ8PDgF6sr4VP%2Fs1ubHRFjk0YyP8wLn3nsb6a4r8jbGOQntkSskcOtG0p2JvnRGJzAjh9N%2FsvPeHaV3lLeD8dUqgrVDi69VVi4VRA2p4drwVqTETB30lv77lly22tc8bpqGxHGiZdshCH%2BIF5IVnuYER19hlUBRqnsyet36HrZ6yPwQ1hl17IAUy1eXAfhPWmqrMEy2j8%2B3CJl4sN5mLw5jkFgR6316gvQwdHnIiadedYilknERcOtByCyAmxa%2FWCwAtfPg9GeTj8KeTklXh%2BWZWwPfgmy1LScEWTPbUmlaFs3gygMHziLMmFa02wunrSO2DM%2BTMVBJY7QaoufcwuPb6vgY6pgEV3RyrKFsUMap%2FWqQ3swt55vuCYZHD1tTGR0a3tGoR2NWuFcCNT5A9njnX4wbzIuMp3J3J8FPNkBDBWMJ5wF0MvtNNfQXK%2B41zNCvcAQQf1svszh9cig4GoeirwSCykGbJuIOvxkm%2BDCpCjM6vjCejRm8SePesnit8hW3KtGijsd%2BvFxDCY%2FAMWL4TNG3OIo7XVELhBCyH5ukx256RErfH6Btm%2Ftie&X-Amz-Signature=802e816900cfaf61aa5229d74bfa82186787221ec742aff2a4539ef25b505449&X-Amz-SignedHeaders=host&x-id=GetObject)

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
