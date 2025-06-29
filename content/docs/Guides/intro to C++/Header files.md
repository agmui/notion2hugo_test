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
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFI5VSLK%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHthsWyFBvVIuxX8mS0Q76m75BboH4ZwPKt5ywLs9wu%2FAiEA8XjCZATggvTu38aGtuqFZXzKmhEUd7jhnLm2gL%2FNwWwqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOYjPo6X%2F%2BRIF6ePyrcA%2BU%2BHenRUBbPpRWMvE8ZfeHUBN1jABFS4CUia8CLpS4w%2FJ%2B%2FYUW72kHgJvgUlzzCMTXWL5EcorBWod9i%2FyH156%2BuebeIP%2FxO66TFDYVxFbLWBCnVu9lorwQsWPpxK1oF5Ur97bQZMsCwrZJC%2FKqX8Uwm88oB8BwoETmBGKZ6bfWX8WqZVPHfaojBmXSm%2Br%2BrKKX81goF6Z4DIKFWFbWEPvmNaFP%2BUmIJ3eqe5lG8AVYfVIz9MZvNQgD9smOmomBeX7qDbgy59Jgh0J4H5Qz%2B3Ne%2BOQ2AR8ZhFyhALd4Og5NHZuiDiDgvGkTv3%2B%2BUuLydPeogcpvT9Bq0%2FlcJaL3lx6xkMx3hQHfayhqghxRTP42CcOGp2XvA1AdTH2iR1QMGDei5dkrITuJJSFxUOji4SD2M%2B8aGCDKz7OR6s4sGCu1G65ulf3WJA%2BK5XMmLY8hH01GZ1OgiM8QpbxhVmQGSDOZTb1e%2FT%2Fidzabw%2F2YmWKl990ckVmXUwnw3h43nf998TbIE2IAFK4Bhw046vNITACb47H93Do5A2cn8IhuR05b%2B7pwECXAXzyYGRhgxm0DLSL5eaX8Q2WjZKIM94kUfeOKVJPzXwoWdGDxVjO6dQTvZURe87j2YznqDK0RXMI%2FghcMGOqUB4HDjLRAmoA8%2Bv1AoLTQ5U3RSB2VREYRQSAYEFW8u0FUyC%2BK90CtkS9FUvM6rTF9X5OAESxs33L%2F%2FL3PDaLeE1kM0rwJnHjAnufphqaP9b0QLr%2B2BAPH7YWWgC6IRYbTJDM312wLK%2FgKs9Ozd%2FFMH4QNtfzA8QefUfHe5vb0%2F11TsJz%2FwUqD%2BrzxiiOlAo5FEE0Sxxjw01ro5AvsEOKeJsobMbS0a&X-Amz-Signature=f2ddb5507ecce2d8fbfcc543d9812e649370a57fff827b3dde4603d8a638e409&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
