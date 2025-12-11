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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWRTGEGI%2F20251211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251211T014431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQCZ3hAyH7AxODyyZemM%2BjjJ11lqANeWAMHUiexwkLcBJAIhAO%2B%2FFg8XcYkroeIRkJoToM52bSCst0wD0Bo%2FZIY0WuCZKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvX4Ddx9nLYPoTzrAq3ANDDhhI2WNMP44xvqpJiWwZYD9IosEbPoBdoEvOtJFWBdM4rdYhiA31c7Rh3Awi%2FnTowepJjnYJkpJIxba5EKY9i0VkQg51zkxM9YZ39REIHoBv7a%2BuQyCuP%2Frg6DStBL5%2BRSORKT2eRX8TjGuLw5f3YFNdOxMMxd%2BHIaSI0Ed0kYjMIWzofL1ydKtMjqXNjLJBqa7ZKDZoWrTwnushSe4G7lGdSahyyZH4zdM%2FOAHRUFmviLNbsDvSRMYCkpFzDBsl7zFoSgUHajgLENg%2Bm5AHRrF1CDYeeAf455%2FQPgYIVkJ8%2FidQHYWJwn7hclowOhoil4upoTY%2BeVzAUQ7DgTngFkea5xv6TXINhFM7dVFK%2FjV1pRjty4oRV7ib3ksSZhBs7rBM88505wHYtM1k0rsXYfUUEiGH%2Bq4AvW8%2BOn59pSAXpJEis3Q%2BafAItaXqSO9IQluWOB7i3Ccm5eP10LIfwnwbqggdZYjh2F9yc0Hy4cAdHzVa%2FvOymWeuEgIkBbNCipOFZPdFV769UBQp39i6E%2FX5LlHToz817ILIEi9GTyyDHEM9FZIDStqKhozbgvYJzuCG7hqdjbvnbPyflLG%2FlrVOjanJEhz2Ip4faDWMOtmF%2BVTBrb47IvXGBjD%2BtejJBjqkAWkbPd9jHaSH2nlVlg32oSO0GS1zq0fO25zptpt1gLL%2FsRgTLsSCBkswY6xn7lVdad3Ee4n38nP10Lxrv9fmRYq16cxpAPi%2FQgZNDgkWcYQLPpMuAsyvuwgiXJc34h7goiVdnyMLrQSKoZCWL33a4FJmnZcS1hJxyb9MG7mnoaUBLbm3lD7gkmCcCK1VUyOsBiC8v39%2B8Yo0ZywGDmjaUII%2FuDZl&X-Amz-Signature=e83bd3c3222b80b92eddaa8a1ec1b3d5bfdb4b014be445687b99ff9ae135a5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
