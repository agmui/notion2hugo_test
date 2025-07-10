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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTVY4QI6%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArZnVH3mUChKrR0uFlPgeF2ql4Jg1NH39oPZuLBl734AiBIaOnhQPfS3EBjMcfeXm68Opuxizch7%2BoexCm1TgxdASqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BSux1o%2FBOR5JrXdpKtwDd8iEHorrQdxq3Q8S3eqW%2Br2kYhb4gIPbSclSgExffSoS9YSVaQJSXtDCD3L%2FIpBXXpDH%2F1gyfgjX0wTnTH%2BH8LzqC7R8qlBOn0OuAjBj58OmjbG6a14jRmUps4kU2YEluxI4Ku7EnJYgHFQsIMJNDBCgQDUk5ZBGKOQTjC9UZC%2FJfNgB0%2BzoHfNLN05QgfYvcoiV%2BP5NprybDaKrkIzIcAQbqlcJEexcootPJ4XI6JqTkj3XgIbfVjLFOUzV7nq%2Bxyuwi7GTbRDuhSFhBx0zZ0Pg7h4JIanoltwJM1hBLk7lJ4W2HvKuF%2FtJYo3daNBKLbH0bjI1NOVxbuz2v7qfV4Bk%2BcUhKjXb4%2FQTEnMiMkliXYh51f5sU0UdBEFx%2BPBSZZtXru3jgc2br5bASz7KQvk9OInr2hz%2FzYyqC%2BA4EoA%2FumbixskvkO0d68gJ%2FHet3kNYMh7CnovyCYCr6lpakRGRpUB3BNFZOMXkCvC8j9LTmjXFyEkD4fW7%2FdxsLQvwG0vMDWenVJh13BfWDMvLJTL8oEcamBSZcXU15ibhaVNWGKA5UvmqAAFKaF5jYmlelfOjaQGBe2PxLaFxjNu0c8B0t8WClai1mu2yMBKiSSyLphwiTvfyVehGBdcwmvm%2FwwY6pgHzPBFWPrAsjL9BnTFLWkoTK%2BBFmEP%2BxKvqXuYhfeRJB4uwdEfHf9rGQNnDUu2f%2B2VT5zgi7iua6GVxeqgucyQVZ2NYwmCU9WyJwWuRlBSB%2BCqgvF%2Fm%2FjqpMpMh6fXj%2FOcprdPL1YLSghcJyos%2FBqFzOAgQjCVYBwEL4uXua37GmP4gHRpqGCRPi9G6sXFuSbW420Y%2BcgyTB9P3%2FLoe1xdkwXiurU%2F5&X-Amz-Signature=b57fcea8e91fe9727b05190aead26a0c718e79e5d8203f1f8159942a168a2a4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
