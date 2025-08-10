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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4PVVGGC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYY0SoZ2EvBmF8I9KxJrlEw14GfH%2BUYMpQhz9SCwuv2gIgDPttJWDLZB%2FoacIKNQHjuoPQaiqf18p98t5JjNAWReQqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjRpjf8XUuv4RUoGircA555j9uklCMSUErreCfe7WxggIlt%2BRS7CSniE1AIDwXbnEtx7SY7Zoi3sg0nTV%2BwSBBQu7hzIhFuwCHdWiPEp9x0uFkUiCSf%2FFpG%2FgPU%2BndY%2Fdxnhf55pyeqamChzsTjV2AuElApjwC4FeFh5o2kjVQ70lGpN9fnBFYnJw70d%2B%2FvDOyfglGGQHjrgwFwLtMeewyo%2FYdiQay4d4OFUNPET%2BrOwQuf215tilvJPksJDHUsA5q%2BCAcjfuB5rKO2M7qO%2BzXTRfmo5wtiAh4vZOhmiSClgHhgDIpMJYrFJ5RxoR6loeajwl9n4ZtpsS%2BdSuTGk%2BE5VyPKoBO7BJVLFGm6wlJHA855Gz0SJLMFMea3hCCn9ilKhFxVIz%2B9aHCbNx7w7tvemEyXa9gGKoFADBhEWXgg6jiuFTqAdaZvj1A0ju15M3nhflBZb7JtVR4ZHYl5wbbvo9w6sNMLaYhxrSq4s9JRnFysxtcqDJRXaBem08fbioHiRT4ql%2F41jolucG3dgN%2BNxFYD7bc0kAC%2FuVEpIzFzdgNGMu%2FpSiewb3WkYTlcZnsnRnterQUOrlU%2F1JYmIVD6Gp78I4NErnFsFDS2es4DfSnZX%2Bkl7X90GmjMadeNHZULMisnde8P89uCMNDB4cQGOqUBzRVlJi6ZKWTO%2B90Vodgi%2BuMazUS6ZAS4Jzn7NUvindOLPL9oi4F1Q2Le6p%2BFu3cC06Es3MpNNRXq7i02cFLfabvOmI5Lw9c1%2BC%2BlgvQCtQs1%2Bc7uio%2Bn4%2F7rFx1qzM1RbRtqXJa1zS0%2F1W1fx3aGmiWxE7W%2F0FK2Px%2F386rv5OXvpdFtnjZWYEEhaQBRO4Rod9un73F2Ahwx9nosgO%2B5keTjKIi6&X-Amz-Signature=1c4a59a9603df1923d339ef21c181e226beeddae70a40cf4f1e3ae3c1218e54b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
