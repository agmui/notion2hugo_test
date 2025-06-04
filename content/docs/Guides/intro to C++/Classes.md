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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V5VPVYD%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCDH%2BBj9YTbcO3sYpShp6DbTjV273bsLp8X28lKlnYh8wIhAPYKlU5uKjv%2FoS44%2Fx%2BD%2F%2FnGKJFZJgV9MfLUzu6LHnAmKv8DCDEQABoMNjM3NDIzMTgzODA1Igz6ltvfJ%2B6JeeHsidYq3AOMzK1xFZbMU1OZ9fHx2MdFzXruGiV0fAjx0BAJ4mR0zJbuia2cEG%2FCJTitzaZjFHOB5meDAY8zytxodUMoDIJvvqlIou%2FNY87TOjsC8RlbAkJxaJgAZu7Go8A8hzikq4MyFC7DGJaWo95CNpfOpt894RCBMFGkkMIUye3B68SyxcmwW84FijzzYfO7RPOHqGFp3YtWf2biK9zeb%2BOzFUC8jdISBxh4TsKVkrIQTNMEO8dqpjceSH%2BKgw83%2FVblhcCaYRqCbRVS7mFeT%2BFYYpfMtQMDw%2FJyhYqOYr2ycpm%2ByL3qv4xLcWuoAtMnf9AMXvzrYDZW%2BWQdBLIn%2FG3HG3U6WpGkma1cpjUZicDiwc4IPuzm%2FJ1W0ckJC8VPJ%2BnpnvcPbcuFLE0EfF%2BWz7XeXeReMcf%2BlGbSbjqoRAFIN2vMH7GJ%2BAwJVQgVyuSwPEiA0x350uEsS5%2FqEXWtn%2Bu3BYtgbYtKPU5%2F6dyUtPVepNqUg3uGa8kRIbpHOW6o6viIG07tB7iL9qKzbhyAKPq9MMRDa%2B0ckpHzzwZCvxMUsUp9%2FNokV8IFX932WLpAqyrQWuGHeUD4H%2BfudJkoN6PJicy2yNS5pGjq5nJEkOLETzEkKVpAbca6hq3U4j5BsjCa3oHCBjqkAaahyglpvDTn%2BT3iH4NwyZDIH8SFbrWQGRD4EgPJ7wciUEk9Kke8ohfUHjQbr9XBeFcknk%2FEwNd7fENIB13IbRP6g3%2Fner8Rf2E%2FVqB5J9DNeEAPPLWq0VRbYOscmVGTe8deyudN2vOTRiAQrJ%2FppkgYOExuS0Hy8wa9G5I%2FQPXpKHN0zfxuImCekNMeblrJWNbd7oMG385Eo3%2BW7mogRhVIqK1o&X-Amz-Signature=3a82a936a0a49a43dce4f1dbc61a29d404f2d514e571f9d61d39cabadca4f336&X-Amz-SignedHeaders=host&x-id=GetObject)

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
