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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FFCYL5%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQD8adYQgW1lJh5EBSXVJyrmHtG8UGjDB3v0Kc3sqruKrQIhAKS%2F%2Buzw%2BsyJtEGorIzmB3b%2B2VLTquId4pAmhYDgwaK3Kv8DCFgQABoMNjM3NDIzMTgzODA1Igwbdlf%2BTbD6xrUQOHEq3APCBw%2BKbC5tc4hBXEpDpvvin003WpjIqplgN91gr0npwqwuFWUB2KEks5QXNmsZdJ3MVI8d4W05ZU%2FQV3sckRPIfMzxCIZMJ4uNaE1%2BgXriXElo%2F5PrvjpLP03EyLZjmO1kV4vzpFT%2Bqc8l3Gpqh50a6IVRL3aXIqumKw9ptM8FgdxZ9EfyhpwuPQ0Qg3N0UknzU1XEUZKksGJYSYw1k8NjBH4OWLEwy482wCceQ52DLwIxcxquvPuDxgD7ApPXRmJTNTLg8Cjqdg9AeGWfpmEnoHWnnOBAbU8HfErKbq7PajHdbEuJySodbO0AJluzvxmI0arkQQLKlV1hHRl9kGUM%2BpZiUmo5x7Gw0bZ1nRt7EvsVq11oV%2Fc1hKb3rGygbVr3CFztJ%2BrNjTqv%2BdJGKIJrq4kHtbZ%2BLL2o%2BTgpnrrdCjnOmd7pSIuGcY%2FcVrzwGt3tKIajmsvIuEyw4wcNw8Ar2biAgjCVsHRbzVFds6garL5Lly3h%2BUV%2FELXDY%2FjocHY74ttha6nmevX6SgFnQcltIGOuRX84HaHUqAyaoITrqKkO%2B4qTf4BJr9xdj6p05o%2BtXfmDRBYvALtYpFzLIlke2bNJxPKMDcJ0Eooe2r7VDIxjARiuwKJ5D9yiBDDggPu9BjqkASFhVN6aeqPi6x151W2YjxBQ%2FYEn7GsuAVbDcdWcT51KiL55046R3WdtuwiCid1SlrIic2Pxi%2Btl4CE%2BmnBIFLqloZL2lUkqt%2BpwZWvffIk1Cdhb6zOb5FFEKHj8PoLR15S3cZ%2BcZWhZ2lhjx41jab9bFFNRhMFHCFVQa5x%2FNSxB8nxYm%2FQgHZ7NaMyoWFaMzjRk%2FSH28vNBJ1XAlSnyO7j6t7hm&X-Amz-Signature=1c1f92dcce8b3df09d9e4b58946305eeca8753aa4313f7eb4e7ef5582c62cae6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
