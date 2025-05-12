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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CYEZYBG%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T091026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCOYAE2RnXl486vbub81cLh1jigTbmOzr5LXlSa8yp8wwIhAJr%2BktZU3IlcBAAhHQ8Om7THgpcr3ZlyhVA1SlrfO%2FyQKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxr9WF7IhrZmCQsQAUq3AMCWy7AVYQWJ4eGx9PhPfbfOWIP9ji0utmTf%2Fqa%2Fg9s63F7bPjkQa2uVf4v%2BFq6mJHCE3w1PUCl%2B1VSkdltrtssOA9k%2B2zHEvuaXKTpVN3RqkktYWth3Cj%2B13d0fe%2BTjSmWnfbJskunFIzD2gEoI6pvmU9j4pB%2BV0znqZTHmCs4RlEJGmHxx6NO5i%2BS4%2BCt4ecxOyqN7uYXx2FhjL4RNUkyRN%2FTcsoa%2F15h%2BpbYq%2B%2F%2FypYwsX%2BGJOczBO49Htn8fc%2F9mvgX3jLdnO4G0nfhVDFh%2B8vK8D7csJTB%2B5VgMRs5lWDHk2LZpTesldKEo7Yu53fAckS%2FqSiXfJE14esOGsbHFiSvyLxFLlPLE1JoOvi%2BHmvgscgrWcswneYSu0rNuH0DS%2BhGBov3Ci19wD3oz8NoOaTpdhVGzkD2itojM%2FeF8BX8F4ZjbzUVBaRtrOXQci1uprtomA9E7QJl6DKN6pGu9U8tZwX8ONiE9P0HDJ%2Fa8xc2A%2BoSP31lZc90LVN%2By906DXjRwywyv9KJ1Etn6tVz65bk2x9GnQ2bv8Pkb3kHTr9%2Bm1JSbK9dBYK8ynIOpbNCMM36yy1SpTkoMxqrnJ08p5fTMLw2rUTKfFMiYMT0KmqSTOYlMPvtW%2FmGcDDz6IbBBjqkAfK%2Bxy3nCc6iKcSWV4sAQ8I1QFuKyXkUn%2FgZx1V5fvlqxm35xoMYO4d6GvfD24%2BekIEfXVznwhYvfzMVEsw22PHZHfggzLHToZuCgPdc9iunRKHlmxe70vlpuM5Vp7EPB6C0G73iF58EZEoYv55A4TXeP9pHfmXIJFmoLAg%2B9Z3Po%2FISQ8z4ou85YLr0b25UhzziQlFsMyPAb%2FSG306yK9Y69OY%2F&X-Amz-Signature=b6dbaa038d93ed68f051d288880788bff5d9087b8e27bca9071e1cbba87eb23a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
