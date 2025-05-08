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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466374TO6K5%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T081201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjgUBe50qz54aX2S6C9S1yftfbTCPbDNBFK2MUrD5ewAIgLj7QAnVUVSs%2Boc6sdLtaFNBNlZ4iw8MrcCfr7yW8NQsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJSULA45eGwj8jIK0CrcA41A2KE%2FHvXfVCDHmEx9DTYjw12R6jupMrE6tzGw1pUivWZ3GoF9jAIJz0OW%2FNSdV6Z8hoZMMPVoolbamkVNVkl4JGjJxZ7wPSW14wISCtVOwfKW6WqQXBo8dRdOgqm9EJjRqZslA%2BCIU%2FPrOIa%2BIWgETyl5bIKd%2Furqe8K2gpslHU8qSzoS1e6B8xJR8ZtjjMgRCY6Bi0NWrqcXpmxmsexKOlBYFre7kmiEgD6POhBpeR9ibr02oGnLBmRvUHpKct4NtPabHm2r1rzRxnqvhweUo2e544Ozlj6%2B8E4w8BeCO6rJtpTAfYbHyWD%2FnO14a8r8XbIIBqKb0lAMdFBsQ6rGnWyvl4efmpLqXtB4qwyj3rcYzuTom9wvtkzsr1St9ZxKyHnPegxY3Jm3GA741Znq6oEkVpeywLb40VB%2B2IO%2Fvq402YTvLt9thB1IFQVWgu0GCMMZJK3659k%2F1ljdEf%2FrHuGk5%2BnP9fhJoLnP04tWnfiOTkaPJk1uCxqgw%2FHb5NU75eNAucBi6GIZZ07RP506OwYck%2BzhCKoZogsshi6nf915ly3EO8NV%2BEpyuCLlBDN3MZ0PVk3s7htB8Myy0XAMbfUvMaE7c0upiVKj5kY76qBM7ArQk6cc7yJ9MJfF8cAGOqUBrODRVCK1C6Ucx4K2j0KpstVz4LYqz4TxauqbVv1nSYL1WzJScUSCncVW98bonifnfSDlnSdzsXpdGgcRfMJHy4PjcJI3gtGJgaEvsuDy%2Fs0i%2FbQIzYh%2F%2Byc5MrKSxWmYuCeDR33vowOanYgRp%2BqW26VJ1MpvOzdF%2BsG%2BE9veiXHLBuuJfTWRHz6W7fHKKNxLVXXHkO4SwyqM5AQwaHw0Ha48pE6a&X-Amz-Signature=cdf83c28671f6684ec95dd845d4b71d0e0bd548e6ce955a8dae320a897a89249&X-Amz-SignedHeaders=host&x-id=GetObject)

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
