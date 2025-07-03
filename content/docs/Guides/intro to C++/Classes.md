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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQF3AQ7H%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T161115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDuFxw1yb0DEwirunkCaAE%2BVkTtmh8rmeGhUpuDq1H5jAIhALu%2BuhT%2FFcWYIDSLY8ASwXWlKfUdg4aJn%2B0Flpp0fL3fKv8DCBgQABoMNjM3NDIzMTgzODA1IgzbAZz%2FCLiIO1jWhKQq3APJekIhzcKOEJTiEeFAUxOtXNswihY%2B0MoU0cUzQeG4nNRXNvAZXj%2F3Iq1fusHGGUWraSPw2baPeqCY1BUmHj0NJ3rISFs6txyUX2AbSbPIO%2FqLTQsA1hAgU1VqFZ8mMbZTi%2F%2BfhkxthOpE54ct0qYkBKLyYJ1Ovvyp6XGGA66SISgMi4HMl1csf%2B0h6aYA0ryJ%2BATV8XflPljvc8VaoFGHy%2BHDqysmP7fWVr%2BBHtjkOnRyxZhF%2Fh6YOfgqyhTgxY%2BEzgzHt93ZGG8Wddqfb%2BeJInqTKyFxABhXNoICl8CXPtP%2B2K2nGN%2FB1GBFYq9JVDHoQnsKn7h7HN%2BtLB2u7gEQzs9laEEpio7tAXozbBy8C25%2BvOAfHpGIJVCM7XOWX%2FZkz3nj7gwoekl%2BCxB6Kg0pAVZ5wzoqQngvOHMe3PjTFuwuRnNaVQaNl9yJKc43ygLiFxoUxNo3Bpr3PmoJn9TGYvPEZNUVWqJpPJUDQYSjj5RTh2doCVtn9x2ZNIxnUgOMx8V9Zohl04guACbqB7hC1j15lh%2FCXiQWcqTh4o9mwGvoUUXNjKbz1Vh2Ww12KVfbLjIv2JFfFRWoY%2FSHzUx3ZMPp1ugDXzVZGqMwvjfmtLZlp8jqiH%2FDgNGZtDD4uJrDBjqkARe%2F5lQ%2FOyo3HLVmyjNMUxdb7ATb2yDOpEUJrzLPbtex1r9nB0AYBGFXzB2rd0UjLAaS8GQxv%2B7bL4TDZ3lrxe8MnwYh15vxBETdj8c%2FYBMZxpq6mW0OCPDBMPNgiwY8qLr1dqd1tWAHbWAwV6%2BA2RswIj9TM1YrqkqhKTn%2FS5sM8lyaSdt17%2BesIMf4PpLn3loltjv9ZUwaTvSr7ZXvFXnORCjW&X-Amz-Signature=ed730740ba8ca840dccde7063f1c23a6ce28be69531f51a4f6c4a35afeee4b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
