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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYOCV6O2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCWdKiy%2FZvchJXAh8d%2FWAyHBCAMa9Wc1X%2FEmTna3CYZ9gIgXHt3mwlUjM1qCEuHyACq3aIBc6YThECsV07NE0jkRBYq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDIeuTY2IXmnp9FSZuircA3lkZhnoNab3u3AOQfmpDU9mUePAGtQ%2BS4PEB77w7tjts0N933momt0GsczitOsVEhfkTYHE8BROthKBVwnn%2BDv13%2F%2FwStpRn80Yg64QgDssfmmYL8%2FEo%2B5s5%2BkD7cCqqIqB9hlFFoziuEcf284Ug%2FmL6Z3CdY6tPhp7KhOlrLn21gAqrxQnMHSVoaaTR2DbAgKyzXmGrrx%2BbISSfrj2VaFIjZDjNaYnUFznbn6CVyhe07JUnp6Cmx9s2RfVmBgr%2Bev9oT%2BkoXSkemIi61yAfc9HSYlXXYQlCI4nunRulM%2FakvDtq%2F1%2BZJkmQ%2BBcOCUb2fZLJw8ygkjSBH2JTzKT9YVxb4Oy8VK9k7Mph9QNe8LoNWm3Ob6S9QcFMHX94G65XVvl8WYG4KBXPN9DNVwobEG8W9zKV6yEyn%2Fu3xM27u2HYyZgA0qoIk1tMKqll%2BhYVmsF%2BL5QXaZ63DSsChumjFhyucIllBRLiSVp3TCrsGliowKvr46OQAqCh0xJ4OEDGhp62987U08k2hn6tJeulowuvXw0n7c0zYqXwAKuHDv7xAP5jgwDAeH7vjmhSQ4gvJ5w6I4J74tkDle%2F6D4hXr81cSqwMRHhyotOVSQyssbhAey7NtXjFraRvdItMIPwkMQGOqUByl%2Fu3lGOqdvvJ6ng9guny1MF1p3XXTLwYdwiFB7sNjzOJ9ZeJUj9zAv4romhfA36mRxv3Km2bPtfGmnBMCaicKb6wE5CL0MibudvMfyiEvfnlPCwDZSS%2BssM260gJXRvIGyeeQ7IpNDA3tqriRjA22nxN4jvaKe1%2Fzd3it%2B%2FiKp1HaH2FX5nmcBRZ6ApGV8GGpxqOHjE4YCEjsaER%2FftzndOlPL6&X-Amz-Signature=b84d37226e6f91c034c89cc0c55ef4fcc5f91eab48f16090f71dc4e7b90036a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
