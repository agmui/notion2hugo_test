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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MDN732M%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCWQEx5oVKq%2BJSziRhCDbd5LcDorRgrqs801qlGqfyQMQIhAOfDRcvmHnFALAnpumarAy5M1MuCSulKoEmFVq0%2FwVY6KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxc1RM2D%2FPulQTgMlgq3AMwmZCKub1q1zpDQxHnr93DtfVSH5mBV%2BIep5ssHQJkI99tS85XZkmM3NZXYEBkM5Hs1evRbkp1OUxitMzbPK2L6iTDseF8kqLT5Qsy4akcfyZxFz%2BZU9k27FhmBr9xuWbWceJUEmt2LmMEwb%2BvrdAD%2FXV9qz1iTHjUPg%2BvLCyzee8%2Bzd91uL%2BZuA9liy28jS5HWymm70ljylMBZngjYcqoXZ7XY1iTsK4bODrtdnoSGJNHSTS7kW4uGAhA2gFdghhyXUWv5aQbFTjU5VCX73zlZyg7Rhiso064Hty6Saabf1EFwzWjJG2RJqes7exj59NmVF9lIIO2mHZ44FgoErg9RxTndsQKCT9e9pYs0ZTMNQfoyZQ6zUrfH%2FPRU%2BJXTaLfge4i%2BLJ6LJ46geDjT9a%2B6UcscxpqY8jK2qia9YxB2nsmwq6rM9moHEa6zNlVWvVgyJUkdFlJDFhkrHTQ3BFjwwLxIYN6EAZnAjtXLyV2BXCzn7yLSjma7C5jXeboesZiPVrSQi87o2RRz2BRo6ibFd%2Bj%2FzV65bGVeIHlH3tSnmSLQ%2Fa1k0AG8CwnMl0BZWcYlogn%2FAM84w9%2FGh3nb%2BSO%2BH2XC%2BB7bHJHpcWFbqD3rtkv42TYDF6rvO1fFzCrrIG%2FBjqkAZJvAB0RzZtFaK0QePznnRev2Yoea0wst3I7WzhLTlDrdIIB%2Bd%2BKsEAWQyza%2FWKHeXwqQEu1tmSSdn6CJCUPYx2fr0wXUPpivPey6Kp8I4vGpP4WXEs9GF%2Bv7WBFVhDgKaOvdS3l90qmOBOPVfWNL%2FZtIHx%2BzouG64lH0oNUZQwz8kpEJnJLbNSbqPaLg%2Fjy1x3PWo626%2FTBeVpfUvziiW1xzy2r&X-Amz-Signature=de69853af47325251fe1a2a6e3e8f5d09c92ee141fb2d65bb8f95794681dc2db&X-Amz-SignedHeaders=host&x-id=GetObject)

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
