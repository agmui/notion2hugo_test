---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
  <summary>{{< markdownify >}}Why do we do this??{{< /markdownify >}}</summary>
  
In C++ we can’t use a function until we have defined it

**EX:**

```cpp
int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

To fix this we use forward declaration

```cpp
int funnyNumber(); // forward declaration

int main(){
	printf("%d\n" funnyNumber()); // this wont work
}

int funnyNumber(){
	return 69;
}
```

we say “Hey C++ here I promise I will eventually define this function `funnyNumber` but don’t freak out when you see it”

Here is a link that goes more in depth: [https://www.learncpp.com/cpp-tutorial/classes-and-header-files/](https://www.learncpp.com/cpp-tutorial/classes-and-header-files/)

</details>



`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTSWZQRA%2F20260331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260331T022843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGSEkeyrBU837smM7T4EepiGXrRIJw7Aezlk37X8PF5%2BAiEA2tGu9c6t0ALLl%2FoEijy8T0mhJjrzzN%2FJJTKjSD5izCgq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDMvH%2BLzFpbzwCww6SircA6YYnXKeOoEMHZTPe0AmOBoGjFCNhBlJLe0%2FxOd52rZ0qunf82Gokxoc3GtrVy2utQMTWVZr7cbW9TC5PkDPmkoiAc02aXzNDSl4acN%2BB86FfEqAjhgoPQ%2BdH8zSAy2mRJvJxZr58BLnVdSjRV5PeAsFGRytdMf8apj2UgZ8nz5EufUn9L%2FEuHAE2OWn7g8lExSmH2Rc0meUXXutJg7i%2BX0ZidyUmLFV9xl9JaHqprDKiI3jDs7ua0TXUDZPj6BuF%2F5DhYjpwahjOC%2FlI4OPqe09YE9bDegbVrdrbOZqmsMV0WPgEwLo1hgmYTQE1Y8A9SWMGdrKySvtRHgIj4GdTIAbvnZaNfffc2LiO8O8xFZaIAU6m%2FhksDcWgZ4jtEyOdGwhmRJjfHF8ruIQoZ087kNtBS3EyeCxaqP7BjfZ40dE6h6gL%2BXbdQ8wS9BvV0S%2FhKY%2FPiv1WOnfzYnx%2FtfhiuYxbJV0mHkfGlThj4PWf3tdiVBlpTus%2BpQBCakM%2BYDlGU5awDDtnYYAUX4r1f%2FqKTrsS0yM7%2F0sr59VZEziR9oDD9qt2CKH4QfEBf5FzV9nIy03KCogVcsRrovFlqONZQZxaoeMI310C56Fpc7HUiV317Qae2L49sJRwGl0MN26rM4GOqUBMCDtiQslDftIUKK1flgooKCnUSgHoml01VPRNC7xvEE7kfJz21Hrn4UTxE%2FMOLdyxrlbCVhDkkRxZcHCYzECq%2BnnICk28be8u9rbRbldAB9AFrDC%2FLQ7PgmllsGJGDxzqNAgAn3nTLsADAXHWLgwaYwPzxoZxYE5bZhCPUhe6F4azmW7Wruufdegz5VNRGdUtEN5fYSgYeyMOOY%2BQzmCBkvxUbPH&X-Amz-Signature=4e7290c9ca2aaae7ba253d1d5e24cf06ff26bb7eef01e577c2c8c3b596cdaead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
