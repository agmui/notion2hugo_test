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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDOEUZIR%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIC%2BKV9ZuziDvrzmLb4lzVTcAlsujW7WYFUoZSm3jklLrAiBsaIMlCsSWuA4cilOQo6uuSEqe2xGXAeXTpDa0mC6FSSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiDz9egzLXKAliMqKKtwDlfZQ2Msu7D2Bq98S4bl0BEXeTcK%2FjbD8jJ82C8Bjj8vqfZxpAWQmVNiTnHATEjXUysHjJxXZ66pKczsfNkqFhBwVzOe9bncPAJvnHwHatV4k1IejukWS%2Bta0X7jFTYO%2FrmXbd6X47KXRbxztD7eOcTgzqe6pD%2FSYjXmhM2K2p9LNjXZf3HDfwG2rHXWwACLNnYrrudcHlYr2Djcz9vx%2Bl%2FdRZ6QbUpWgHjWLud7IcU%2FiZ2K80UlCwQTSCBHmeQ8TpIvjmQKY6tkBbAG5DWvpjBXQgG30ilX0fhdBXiy6cEHdNKZzLG%2FTHP7gzTouzrvH8D%2B8szs9Q4QkeuQOiZKfXJYIQWyP8RYXNeyxSMxugw0jvFbr8KrLijY%2B5N0gKCu%2BnPOpUoBF9JlAKvhOE%2FDBJlMt1AttaFtI7hK2HNzIC%2FTRn8VZhS2rP8UZAp%2FqOiI3PS%2BGQz0fbnTmSggD7x0%2BTfs%2FH7meQxfDN0KuEl7zD9P5C1%2F67CIBt%2BR6rpe1ykTM%2B%2FflcU4igMxVK8examB%2FKuvQktDaC5weawceUDbDoctwl9BaFLTyIaWgaPxxHg5L16o8qSNZrZl%2BuAPlznbrh7cunAAKqAn%2FjETflvezy%2BaE9hHFloYpejSoxN0wh%2BW%2F0wY6pgEUimiB0T9oYd0cj%2F7AtPWGa6%2Bk0K8ZRbHQDkybcXmymO9RCoU3MO7enzKVOyUeD5ATZKwWD5fYGY8hsKTe1varpAZnJ5nNx%2BbK4eRKU1mQZr4N6PZbljjJNLp%2BLDe6F%2Baun%2ByCVfN90xHF9qx%2B6OiiSTHSRh%2B9hk8SAByEVvVHl%2Bx8UD7MbkFYAsyfGQLURQ%2B1jj1VkZR4PaKN1Pb%2FB5bRjQBfWoy%2F&X-Amz-Signature=1719bb7a69729a9bc1e9311580b9e5d320adfe614280033243baa648a37a388b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
