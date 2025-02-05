---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "null/Guides/intro to C++/Classes.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667S76C4BH%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIB9DgMSboB%2BvrqcleAQVzyBodBSSvtH3yZIvBo4GdGtOAiEAkEXnD1xlUpJLvgsAgB8Ky5fnLBICksNDz2aTX3k0grQq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDCWJmgQ73xuKt78WxyrcA8tsa6Gowb8aKuvA1gHmtdR1AKSxs023iAAkMTfANZ9EJryDXcOMTUhaI0mkhMI2vJZpJV3vpKPHJLEnXsWQeDzPh2KNfe5Nhgejn8pDlJjxJ0xj4wnYXuyWiAJYUwZo%2FBFEFhm7n0TPOWv1LmaiB93L%2FbZ1iVFMAsFHx5o3OuA5p62vi1CB7ItpJ9UKcyy4sgdsj7yn7c2fy0PlAYz0h1ytNqzDlhPOZvdrEQZh5SnuSLWZUwuprLCoBrN%2Be%2FLbLgnLVG81%2BJuF0D2C0feIGtNduiv56om9vHq98Gf%2FM%2BRKwdPxnv6YdsdZlY4UtUXn1apCbNxlGZLuctTuI%2FFL7VuUJBm71G9loy7rVc5wppRDzhopcXW7mKuLwlg3sc%2FRHO%2FCImgFCfR193kf7D96li5tE8908CMschFM26TpuiejkLcsU88qC35HuZlur6MB%2FlsOl0OlHao59Nd2lh1MgLq8DLvouOpBAbvLcryb0oswBW6ZPZBirbzhUHS0fcBHC0M3LZDEbapp0jUs98dXgEi8J948iptJyzi6mkZMg%2BaYez6kAmnmVwhMJdcY6cW42WrCgxI32Man3X3ullJTrk3yG5z1VXZ04CNT2aQtJtZ%2Bew59Q4uIGBnUKI1IMKbgi70GOqUBChyY%2Ff4hHQDR1KsZd9Pgm3SPhAHmgXI%2FmXU3kpyL1HLN5uyCQjkECLdgiaNyavHLJQyvfScRVUq0Po0c%2FXx5HhYXyplp7I3ZuemOgoxhlhwXUR9ic5A%2FOwKvtKzFt1z%2FtyiLVc452lQ57BiQPtIb6zBJmQZq0Ig37pJExLlUaflDy3n%2Bjp4OIHsoqGh6b20nadLXJLE0BYr0mac1SS9GGK6N6wXE&X-Amz-Signature=9a9e54a70eb8847ee748ebc02433e225ae683ba25d11d9051d551715e8c67e67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
