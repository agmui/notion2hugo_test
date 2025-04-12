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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5JB2Q4O%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T200806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIHc03fXdQCJ3BRV6iEotEdpQhDFqZPER3ZLchp7KTrFbAiB2CXsrviZLhJ8ESZeE0hoqTvb0d6fa%2BfHG4WWFRKdVpCqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdDfyf5W1linOW1%2FWKtwDLmIDf5MRDV9NS1PL2SFbjGqMEzf2aBGqnK8cYuVH8pkGlJf0%2Bj9u8URVyypwQyc%2Fi0Aw2XjvTEvtYrb2WoaxxP8S9BGCV6TOjk7AVXCkkqWBTEha2aaVBn5MpuVy29VS7cZfp3CETqjs2KjNzcdNm8dRKM7xhqW0dLHD59PWyGfWdC6CVDMoLs%2BI36K1DImBJrf8NSGDdfc22ksWYTyT522%2B24TMXkicoQpmUHfx061nTN%2B%2FS%2FriEMksc5at9r%2BHwt7uKT9R3xzHpmiHz2sdf0313s1CN4IHMU3yejfgSm7WB8G%2BSy%2BUVhRTd8JxoxDygCAoBQEvrh0%2FSXyfAfevyRkS57hGxc%2Fi0Doova6d1Zhp3bi1fp%2B9PwrUpZMVB%2BAUlbGKQRybAe2SHVvj78xZy5wXklluRh5OSUq9JJ%2FXsAnI3sjbOMclT12xh3HAN%2Bcqv3hJaCjhhOMCAAuAVKlW5U0dfh7xW%2BWFw2Jgw7Ngh3e%2F1qjW%2BosKdzAmCHhTY8EgLD8meFgo2rrmRMHwf4%2FjUUK25DP0P%2BtSECVQ5N%2BU%2FYS4BUrsthEromRunjFlJNDgUuUYN5Vv8fnwxodIcLLc8I1Bso9fFB1kpspd7lEX8dasNXJjwYXPhKYIPvownPrqvwY6pgGC%2BLqRyqYsYhyiJet5ABzT4946Knw0%2FU6Dbcfu%2Fx5%2FVzQcDsv9JwuoKm5r3e1Wz9l50Hgxz%2Fmzrce%2B5Ak7axYoAh65bfHnrDTIpZyTiXQk8t0%2B8kHjwpApK0ptyCxO2opu6FqPw6J6J94WQzDZg2x8yGfVRVpO3OxPWjWgiJ1gpLftCoja14G6EbM4gl0EONQxIjTf%2B1RyrcirhFhA7PY0K29O%2FvLj&X-Amz-Signature=e9a709386724df87d50f947980ee1832947484da038327122107d359cc9aca5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
