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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6FZLV36%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T025515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2F9MJlxIRFgREH9DxpMT0Bca8JWCD69BG638WeAUChRAiAB%2FfgCBkx5xp3DlHAbhTlI0h3m2yFcBQMLu4u5D7GQPyqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkOiiwHVbnyhr32Z8KtwDV7ET9Mchj%2F0fKHK269JuxfkqTvnJTaLJ%2BsZ3xxkA0J4fQwPQ1qWeAhsQk9z1bUbXhrfGR38PN9a2rkqbZ6LxkO%2Fic6x%2BlSqUnPhM455z%2Bzn3TgpRORRM%2FQIw%2FjwwK7OwYl5Tc6LzEhXsdaidNTEbEp6urt8dG3Jf6dTfFlmdOORWsgvjbt4GOQuZWeGtNMjUGyntu17ASQUgx7vjOju3s52V0iQP6PtyEmDgGIIhAOTnU%2F21Dzc2fPaaG%2BNPqLbQ6ZSn9hmdwMp35DZg7hqAgrTCM31%2FnGWKxDQLqUT7GTUZ0dyleWB5pqi82APm4G22yR%2BGUb6VdJakvYQv4lQqk%2Fo9UeDuRsBHWyUjYA4ZlsAeEz4UDz091UvvFOGSKBHbDyPz22bBRfGbsgy7sa9uXkSfw6%2BPDLvBBW4wAwuAIV4cy5y4TpYTTx77tMSJ8RCb59GHVzwCmNYJ%2B8k4BjIAqvfk4t%2Fnbw3I5lRJbPqFWG%2FtBK55gMD48yWL8Okwexl31wTiFOFlrkLcgmCgzJ%2BxevYrgYcA8Qi6duOgmlbeCKHaU9hlFaG5xpQliLYgZQaDuNnac43PtYunRq8Xvh%2BIJ4gjWKwUWYd%2B%2FmeLwinE6AS5Qe07meFZFERqzEcw%2Fp3lxAY6pgEQdtG%2BRpRzsylDX5sfW9uJLKzwVlW7ZmZU%2F5MP2AXiplcZ4E%2BP3OEsobsEVXpX7R3jhv9kvQkVbvzxj%2BcjWVPl%2BshCTjUfIcc%2F4GBVwkoOgTijAShY%2F7R6UAEHMkyc84Nm%2BsxymUPiwnxYiOVf%2BHlWVwMOZscWdORx6fnC37qmmuRVeGdiIN6SaWwl2dKfIg5AjXRX%2FsooB7wcMgQrEuQ35JTS4VnT&X-Amz-Signature=98d522fe8d6af6220af31fb1479d53795a842e402b6bded8b2dd07c19f52f6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
