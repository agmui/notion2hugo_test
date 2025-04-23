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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHX2CLGE%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIE88jvj2%2FjHA5bMolwB6jXpLln3gjsb7RnDbs2omPPWbAiEA8Y3BOBKqtXlNAceVB07cc1cWKx33paEQuq5OHwnQ4PIqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHVDrAa40%2BD0Nh7UxircA9%2F28YeLWymbumXPLE1w6fvSC78uq4rTxT63ILCUW5MLRkUBJctmhF5CPO1kuuMj%2Ff8NUqHHmTqAtyvbAjQkuskq7jl6MGKxJYCJiYpu%2BBE1ajtW8oK4KsJL871fK6Uv7aJIHNZVVXuBJm4Faf7dTOg0LpKifBJBAS7WK6j%2BRmUjk9KXxYdx7y6Jax%2FtuCBrJZfja5uob9A24qop%2BvcPNqus7gLK5mE9tSw1qi3dOpsBd9pXF4G6hFKuSzdoJdrjPWqmf7nsrJR6w1KmGKjtkBlZUB%2FQDh0rfPiHmvaBAjr8jHomHIWAyJuLuj1vq8GU0Kd9e63LFgg%2FC9CaP5uccf38QuImPkpl0TttV30DUohbuBwrTjvYIcSyStip5Qt7D8eWUAm2vXD5ZQLhOv8KmZdea5ltv3vleVFWMBsuwBIcWV%2Bvrn7pCTw0p5SfcCN8SsttPZaQtqHggYLhV6Ipa18TCBzaMgPeUMjB8sH1AlwZbL1iJPXfWdVp8f%2F7X6CoOg6BUIvR0DS5tUKJKj%2FXS2%2BSaIXvzy8nCZoICGg3o3TN%2FS2kPkcibTswJVJZo%2F2BN%2BwpgieqTXEs62%2FZJ01oNKcOeQMRKtlUbaJlZHTn0kRpRFt%2BaH3BDbh3Ami4MKeQpcAGOqUBYmQsLsUXSCt7rsWIbK11V%2BkE31md%2FV3t0mIJbI9UdtGZ%2B%2Ftf81mKz8aq0qakdM%2Fgci1Y4VRwedI4AA0oDr5LvnmyStELyxofrZs7Ck41dnIRd%2FYG1D3WeHlObiBCg4Dt3%2BO4Wn70FEyUwa7%2FWGreR7xTsxGXUN3bAKZB9rtRNu6k%2BCCe0B9CXPe7Ap8%2FLgzhYjWakETtN%2FMiXbN3Zjl%2FSvwqNAaN&X-Amz-Signature=2bc7435049b48ae233216f0ccecf99b4d9f1a94727f7d56a3a747dc85e95bb41&X-Amz-SignedHeaders=host&x-id=GetObject)

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
