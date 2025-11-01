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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTZZT3OS%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDDK5wJzrI1k9vA%2FEhiN1g0VPF8EnYivsnkKS9W2IaV3gIhALbwflcNT1kbdODyvTCxjv1UpYv1f%2FfBOzMhvbBnm4kRKv8DCCAQABoMNjM3NDIzMTgzODA1Igxol68Sm7SaJ9LOEKkq3AO0MTeW91UF76r4MPN5iQI50JKRGufgq2waR0hWJGGgF9sPXRKW0kk810ILNjNyoUYMsCl%2BdoGXjif%2BwwzMaYAllT0Uk4jN62O1m08ESe0hiyR3kzFbZ3rJbZ%2B43YNMKH9j%2Fod9fr60GFtcv3akY0gU5N6s30XLPUAX3jij6Rz8MAQewAXYRSCItS7%2FZpzfPPF2fYNMkvkXIQYkgznsxoQpw8O%2FrBAb50%2BTIGiMRwDL1D8J%2B3ZPYCRqGbOkeoQUBxJSst9CfKpzsFBUovO0U4kU5ADQi78LO%2B9%2B1Ux3nETqbpbaFzWmgpJ%2FWnO4BLPmUcDfTll%2BqW1FLxzKNUMhtP6U8Synomrl9Y0MwiQEVVuouH7WsYk8AhdT%2B%2F6EPbMq6erdPeT90Ej%2Bq71vU2AwIP3%2FN56kr4IYyd6ilYQoJimrIVbe2sio73dgG9Vrn2ZAMGs3IcjVM0%2Fjt9V9crosLtPORUUcs6KSWUNG%2F58x%2FcSW%2BSvVkcot85eR5OfbA11aDaGgJwBmSII0bBfSClJ%2BCZ04LkYr0BvsgTuWeqqr%2B%2BfEDBu1XhdV%2FJNjuzc5lUgNdsSm3npnlbxwaW%2F8o%2BXxtuVNdI6aWWCE5LWGxx02ieoU1utZ9UY24yVM9tYI7DCd%2BpTIBjqkATFIwKqRvecgTIMicdPJKchPKyp6a9CnImUY9vToXNyri3NBAafDQaxalpQwlinNzthvuQx%2BNHzZmFY1JEkXWBTy%2FIO4EsDccB0lLrvQ%2B6t9QYVQZVR%2B8qlVqvV06WBrBS46Ukxt9FpjoOyu3heiMx74TvXamTNa9PxqjK%2F2siFZY5SNXrd04RnvbhryWpk84FNL5OH%2FgPO5mgwAK%2F4mtQI87h3s&X-Amz-Signature=bb8be7a6f0d065cf2a90f0c8cc410dd4ff6107fefe9569c082de30130b4cfa8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
