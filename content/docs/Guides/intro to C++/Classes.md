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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEQHVZMA%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T121300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQDSuURlV39A9rM0pQMMYsgC5CGQTOFSpn%2Fm1Pa%2BTBlq4wIhALtslYASudMWysQKqVnoVQBZ%2BKnBwdqAEpIWH4RcRplwKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzozGCS9NGKHZpmjt0q3APK4vI0%2FWR3XkoJLOU5mFuj6bKOUfuIjEFb0HNcOF9Y2%2BJy0NO9OKNIUh2SodX0pmcDcOim0uTOgJeQCVxMzoQ1bGc9OLdFw7ibii5CbiW1%2BKPbjY7rtKiOK2weJhK3TrfwMpgMLR%2BYlaXj0lqtRBA3%2FyRc7vCupjNCTvGrZTOHjKnmAt3qCj9sw4C3NxbXcbAogC%2FJakEHyo6OMAReBYXbO6MJCyFVxUjCMmmC4NuvHRos8xQg6Mck9qPNDMrCxW52x%2BucWrfxYXy5z4s7DJyVvQZjNrg5elGcMG59fL8jXGzdSI82mS3F7d9lbLwji2AmrDvewUS0xMmzkUTM4ShO%2BE7cnDmmszaLUBTVNp%2Fx2JOv8BMfhR0KI883TDwJVgM6%2FGKwGkEENZmv4W4sNGsOFCshvAlyldySxe90owj2%2FI2L0GzDblJxiFyIlAtTk1vOvH4%2F3LVctd6hPSs5%2FDh4RbaBOSYuygklGU2bfDycUC6Cp6zfHsPXwhpGjELmQ9lZDHQYyxo%2FipbNrtdbGtfiUDxjak3bc8cqBLFtwEHjWEuKkKyaN18IPsywcjeNzd76uslSsssXs00jZUpLOo7tL6Tx%2F9yMP9bwKqWwbUGs%2FJGog5z9x0nINkP7sTCH8KO%2FBjqkAdUa5wdMWrJiuUW8oA0z782YNi4MYhH52EhAcwCc5hRyeQeEVQWZFT5OnCZ5kG5iDrX77A54KO8ek3oVJWwQ5EGjCR45r0QdfNtDt6sQrAuzSvw7xAX8s2XWTZWUzdbOo9p9VvrTYC4t%2BEiia0os6aYjDpTVcMCvUi0UPCt%2FmnroLgmtX8c70ioyJhZzgFxE6zYngofXdhrHAKJMVrPNafUG6Uex&X-Amz-Signature=997d8c6ff33f9cdaa7af79bfe197406496c839b724cd73c501dc64e874e1ead5&X-Amz-SignedHeaders=host&x-id=GetObject)

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
