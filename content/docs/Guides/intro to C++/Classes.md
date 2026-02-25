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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GPNZKVD%2F20260225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260225T021056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIEDRbEH62vExuebv3mRPhIrdVZkazAkzJmrHgOmUn7RJAiEA%2F6uRb%2B3XgBrupQESQuTROvLm7mLvGN3bGy1P3v4eCJAq%2FwMIARAAGgw2Mzc0MjMxODM4MDUiDIZsc0avTUYPbTzKnircAxX5XqaxE%2FFCXpGl0u7jE3jzyEJGKKxy58hqi0NA%2F33UIAE03ZvyOkMjTsoVAMl%2F%2BPjxkZSfUR0EkjNrk0kfgkMSTQOR4ZT9TI311AWAXaVnpFA65a91Klyxs%2BnjFQmiJ1escDH4vf3xZrLCdmjhfYzisv7jU0tf1clBlle1SZo5Klu9wg7YgIX9drBo04dNd%2B5%2BN7aQvG6j16MJvKoI6VKyYLB%2BXQHrpSwshSKNf%2Bbh7gfexvfZidfv1b0Y1ELzO3ZOQq3u4sp5c0gi5NUYfPgcThaoIsPXAvS3sMycYuiQkkYtaK%2BSwWT6Hrxvkjh0PeAIDAccDVcKllb9Xp3%2B%2B6qXqtnvCApn4QMv0ZNhTyts4G4y3bzyZiVzFls9ulTkab9M4%2F2P2Zt0S4zg8aMNlj1UmrPWpv5YaeIYY4oWQyV9dT05I8hbnsfqD9K7hBZwAO8kf5K4nw8a3hHgckCR1hjjeYwXXeduR3YVxvO8ANa4S90%2BcHAsdtcKHNW865%2BZrHcLuX5pJ7x6AxeffTMMi0DgTHQoQ8emnmyXnzYRtQ3eT6o3lPHzhVSyS6SwkIPDPh2g64%2Bt3lHvd7yOXXW%2F%2BtV1x%2FTRlAadBGJNe5d5BywinKAZ9L3ubEjqZI3yMJeE%2BcwGOqUBNeKtieTLoOrgZx2pQ5M62O1sr2v23VfKxdTheV8u3BOf3nfhAUBTVV9tz85ch1YPwM4waqF%2Fv47mmw%2BOEgdDK9BY4vkvOf5Vat%2FdzcSBotH%2FEl1eI1KOpY9pAPR7UP3hNiQjTRNw%2F61G4sYc1Khwr2oT8MEEYfwwK5%2BsDTApdGNV31uFXjL43vwhlSgErqVXzQbJwXewdEdcGn1K9QcrlIK4LmKy&X-Amz-Signature=1ada21a59ca32c62b0d62281183b981caf531c9d39d9927caf0c47af1d60764a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
