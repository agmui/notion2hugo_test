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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3JUJEY4%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqcw3l7TR6UdNCwrFI7o%2FTTxKSihhvFY45c5W361MXtgIgGY9f7PYWaYTL5gIjWR%2Bueig7K925M6%2FlG08fL%2BLfl00q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDESgzWQGLq09AkB6VSrcA4mVx%2BxRPXTYaeQfYnNTexjFbd5mX14e8f8RDPZIb%2Ba3hxesZtFSgvGmZSccgObEpUL3QDQD4ntYssGy093QSzxslTyhXVwYD7rrFe3an9sQ4oY4R3VGILVDvzjwL0WHA4a%2F0Da55IxiY0jTeIFtYoaaBjuS496dQj%2BEmiwlK3pbjG6hpuzD7SXMhluvJm%2FBtk9R20I%2FQhZxW6Le%2FGu3UWvIK3IPH04%2FR4y8TlnhGWfcxx%2B1bIE5sf9%2BHmqNYmPiqYCCgxumvyjRRc%2BPxJUv62XIDT58VIsAmZ1JC65BXZaShUkEyo9Dusy70ofbcA7%2Fd8Vo8pJEXCaPdtUTnOYtDrU3%2FRUZ%2BTKiNtC00T%2BLDA5tv2Vs%2B%2Fc%2Fe0uzkWAZl5bOOQ%2B8XBzcECAiAyfb38KXnRJdA4AZh8Kkskpv7GbK8iM5vue%2BoOFrIDGCsvSvS7VAYa35tGW5pFxp8MNyp9jR0Z0nIT9m89d%2BSEO9gt%2BCtvkO7gVxohrLejGFKhon%2FZtP%2FwuHlxBt22PNoaYEsmqqT3ELg%2FTK01rReOGFnJAf%2FMHe9uq24%2BthEDepjcxroid%2F2vCxsETW30gpgRAzsR0ZjoWzcxk9tosqaGCYPSdVNZH4pe2Uuy%2BovNKJmrmIMK6qtscGOqUBtY%2Fih8tAGnkHXyo%2BtvnguHWpatObjSoMFRme0wr3OA%2BLTXjZLQR%2Fn7tyKymgi2YnNe44gCGqRrhstcBpPhZMhINQmE%2Fwnp%2BqGkiR6zEKpx9J%2Brf14KXRbvDVjjkfEk7RqCaknCZS35PC7KhyiirF45dt7xRYZecOSKqbBw4f5lAnyN%2FRSmbo70RnoAg0ARYC0rJ4w5oitzNpFOf0y83k7h4u7ijF&X-Amz-Signature=070a893917d7d260c3efa763478546d57c65ea1f3c1d2aad2d95d020f0c622b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
