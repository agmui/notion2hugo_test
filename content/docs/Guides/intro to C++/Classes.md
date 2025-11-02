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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGC6ZTXE%2F20251102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251102T014141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQCXPnWMHZcwslEw1xUK1%2FxMm%2BXDDvpoNL6AHzY3uMKaWgIhAKHuizYdhLdcG5HUKUlAh4053WaA%2FzpNQxUPx2yLGO%2FtKv8DCDsQABoMNjM3NDIzMTgzODA1IgwVx%2Bkf1RxLqbhbNkcq3APdTepB0YfPy0zGtyOBgODhYbKDAldQXaIkMNT%2FZf%2FgeqLqeDj%2BsGXnihM1eqUV4VB0ouP6Kvgbwckuj0MbH4%2Bsi0uPT1G4jSK0IcFMJJ8o1n7Cw5B38KBSnqXqZ0wshH8SJ4TN4rBDWf9G3Rt5E6QlyOkEnWxJZsXqyphlKHzZT8fVtdW%2Bv%2BvKzFwo96zpcxLLtCGEndgrW9Pccc%2B%2Fojy6iM0%2FOfXHIVoD580yah6YMPczMktYOIXjKcUxSBMID%2F5d83I6zmPnIql29Ys%2F9NLvypXaJr8yj3eqy%2Ftdy3R%2BKWJh8T6EiaH3SMVrpWCxO9Qi7Qb7MqIso24E2jXJJCn6jP%2Fr2spD85t%2B6RtnrcZtWOHPh4jH65PiPTRrwwN577HjryKND3xfHJ5JyBC9n6OwYvttKgg6b5eR8K0t%2B1RsdbvyStRj%2F0tO4feKZqJyCDw97VDhxH9mQ%2FWHBmJk4f6CodQa9FYxvXssN4CDerLgfp5NZHdYmUP6GzDduCHS4qFVR6cm9oBubB48CTbsjTFiaFKVmpH4Wl4yiQBo1%2FHFWoBVkS7prGNFQGsT2IB2%2BSw9pRp95zylJma2PyL8JVCttGp9EOfiWVFqgtRtGr%2FntS0wswlJnnvg0AycKDC855rIBjqkAWyJZ%2BEMO3r6d4m8yg76xQFQ5NQ3Bl%2FEDjbIU6Izfxy6KvknKj%2FyfUkbaLn9FN0cuyfKJxquFUeqI2XyouqKcEVNyxheTrTOYvhAT2HovIl8RxGnG0ai8Y%2BJ%2Fmrru0qDL0%2FF%2FcQuDUhBDTdtFbIKKUrglDytdoLZtzB%2FPpjJmt2FIZv6SqxxGos1%2BTC4UYJO4pZHFNg4nET1yd1INW90kPuwZVFj&X-Amz-Signature=d1ebac587c944d9689ef00b8c5812ebf267f5a6969ee8a948a25753b2265c1eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
