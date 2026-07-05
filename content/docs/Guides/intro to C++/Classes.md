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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFKVCLEH%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQDMGQ0j%2BvQf1u0K6W4jDhs6GKSfG%2F5NZR53ZNcw2VkKKQIhAOEGCFsmdVExrwJYHbpHOlruadoJ1Ilz7VnCsehG5Qh9Kv8DCDIQABoMNjM3NDIzMTgzODA1IgwmllNs7bExINyhTmoq3AM9w7ai%2F%2BhAo7COP5UaBeKK3r5k5LfI7KDh9svvZYeT%2BQ0rguQCl5v49qckgB4sNxgJXBEEz0ueJps7ECMtWomzduIAfvqRtUbjQN5iS%2FN%2FRH0pCz%2Bmf4K5HifWgCbhLYeY4jFkJ%2FjQdQKdDRQGa%2B11%2BZ5zfMQIwinG2vngT%2BCKoli%2BfdRPnU8%2BRiYKlIAcUIWmQvOkLvFsR4h7Zd3l16ODkBYGhhwS2czLIMocqqEcwXpODG7m0%2FLHc1W%2BM5UbortCAdLSD2l9c4dot6yL9t%2FW2lHQ8a%2BkKtUzxjWz%2Bw1rwshy8%2FtOB4O%2FA7J12HUfdLlK4%2FjemwM%2BwqsgHYZYFtw0SwO1MMfiZ9CmI6hQFDD2uapI90qNTAioXJyv1CBqz3xIkOVgYx%2Fz8clE6N1wg5gjyiHHk2f55EtalbWyR%2B%2Bom3KrDuz%2FksIQ%2Fil8bhyoflzh4m1L49ksRpw8j3vmKr%2B45Umm8mhDofECeyS%2FzI41WXy33qgcqq8%2BjrurmUyzM3MSCQhc%2FFeSwOvEv2PbS%2BkC%2FkMS9jQiP1VqR7y71prv4ZX0pZR2Cpleg%2BUVc3RuTsgL5iC3M3cslfCRjZ42Pcex2JY2%2BTgXuT3BBCo%2BUgSpCo8zK6odPLeaU5LgKDCi3KbSBjqkAcQ7S6bG37OlqVFr7fEA1bqMT2r%2B%2FEW8mVg%2FCowE9PBjPpFKcBKikC9npbTGVEFRD6obVBz20cUT9HFtCkkozHxPR7O87aNFXWWyHCrNt6kNyVQqkRiEf%2FM6EPFq%2B04Rmxzs2SND3gN5YXZfTbQjzNHRkyjXcuFqk%2FDZQr8oLsmMrR4BznK7rr3jAFulmpOpGSc8GH%2BwfGlmnxpZ8jTvz25PDsuk&X-Amz-Signature=b4a8acd7af753abec6a0a0fb723aedf5914e226d4e6b8dde5b35f1ed7ed61ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
