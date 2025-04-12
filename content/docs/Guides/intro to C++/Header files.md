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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7ACILQO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIAVQpRGpT4l2AaMKP5UIR%2BNullewmx5vJ9%2FgHHtlqGViAiAG6mtz4dZapehUflgT0DzqvJFQAz9TNaVPdzWYaxLn%2FCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B5gccPe4QvUos3pcKtwDMyUdetxhyuDGtAe9ubfPQoo3JuRzMWy6kGa8J9tNXvehR%2FB17qzAga3JAVrSm0jRNcCLVf3%2FQEXXUfl0SYgkij8SQym5zUf6nVrQTxRhapqie5BppVBFDtlDW8kjRsbpJhyApzipjogxCo69p7pvehlsbhX6yV7d4k0qSPkFNZxFZiwMEZbAOZf852C7ZnLKJVg4%2BK5q7CGFnkeJ%2BMrQCwrHUoqJi5WFiLSuRpKRlgrO9AJudPeg9Uv3XkS1ieTeo52Q3kyT2jW%2Fd9loTv%2BteXUTviZSF6hQ%2Fb21xh4Gmde2nx2FBaS0v8X35PbG21KBPRgjCzjN0ZTinjlH4cSevcrn%2FqrVRbM0iB2upDqCa6WoEAc7WggGxYBRWVKBvzlRtaijgpHk7pioN1JbOutCOAJWdgw9Xv1R1MiQpy7%2FodYzvvHRELgLuW%2FiAh5V8GzgjwOpmCUe8cjVRDgImoJbRa4WB98qu2Yy3QTxI%2FzyvlrPzpm0k3PcCnZiSqkJ6%2BP%2BFOpZlPrvFlNVaxwY8ORL1I0Zw0VTzwydeGYzrVhdtipGx7yfk8aW9wD%2FUU%2F%2B70pH82JTkEIzTDmsFrKqywe01CLqrjnRsqyMDY%2FnLad81ICJF2gK0QZzrvw%2BQR8wjqjovwY6pgHUyxkiJW90uA5h7mkxsuhoN8%2ByM8gNzHGHUjrxcp%2Bsx%2BhCZqnY13Ck9Mw9YqZL6xsI8mO8tDyXRabsRGQpWvoE%2FwFnZRzXLrJFK3J0CuTbovwFgjRkaVSdCcQI00dHF71kqBmrIJPPdZqAtDMelJxWx8ZmAaP1qNzmverMUuBf7EI0Byp5lzUdtnuUY2AT9WtutbNXXiDd47AoByNe4qzlK3PdT0Tk&X-Amz-Signature=746a3485400ba9eac4a18c9a0e26eba9feb761f72622ae6e16891c3a5b26bcb2&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
