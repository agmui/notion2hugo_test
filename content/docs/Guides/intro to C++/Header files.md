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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TGFLH5R%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCE6kfga1uvnUVFlp%2F4tFVg1jVBjwcHQti5%2BzuYt7AvOAIhAOwQmcLo1e0vrhVix7%2F%2FApm9nq2RBi01tFeZGT4k3QCgKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrheuyM%2F6PQoOO8isq3ANnqlDAmj1r45FU%2BQUgj2ncbUhdchO1At2WSZfAkd38FfLzGw%2FF0UfY3EAh0EHXszegnE13ExQCiEFp%2F%2FAoXtT4wfnbIhTQyudsJWiJ0F7v4u%2FNwZHWKfBmxBgHXDH22%2FO1btMo1X9gE5PAVyrJ7N93184bGKge4QGIkorG%2FVqTMrSat3ACRvijgjkWbB%2FsEQBWQmQVR6mF%2Fm9ReOGRK4kUSzHmw5xRD4915jvGbr7z%2BG3%2FU8ov7iwVEvA5e7iLX%2BXfHCwcAVDL6qo5UP7y%2BomfrTAyUk0r4jzlzt8UwBAEQzrJ8HfrXC5un%2FLzzVn8u1DVkFwGMPcKrViWhf5rLMnxNPGXNgACFtV6gjZpEfeR%2BsSAR01EStr8AK8qvp6pEgWnFB%2FmIgUyGMt%2FALK34Dpq%2FriE5gTfuTKcoX1%2B0d0LYIKU1mmC14mOCNHJwiSepaKwB9ZO7tT4hZKYcD9aC9FfwsWAVEsAxmDb1coplkN0rwzuC3Mh7Dn0gLO1O9sQptMwr9sz7eyfEifJaiiJ%2Fw5GtOHcwDnZEaoKKH1tYvzc%2F6%2Fwo6EHLZqmOhh9Wjg9O9SZmhMXSXvsxBUPnJ%2FAZeUpW%2B31Vt7stg9gNIo9hUENJl7%2Bq7dzPzdDSm6hfjDg47m%2FBjqkAUjd%2Bf6i4EzFHzRnbePf%2FF3I6dBWq3UEmzsWt%2FKZ6T2aw2knll%2F47BW6BBa0cXYFkpF6odyF8z7YDI4JaydgXrwUQx1DkOiEBnBC1QgA6ztHjPd4tEfwqTbAHy3HbpEBdqoXzq8nF3MOCYI45Zjl5h8IeWLNCS%2FbzF4%2BAtDTKuPFeE7oi7M%2FXJJNJX8Oy3JwWCzdhi001zk0g7tSD11I1pWZ%2BflU&X-Amz-Signature=df8149e63686a83c89cfccafde8057752fde2c72be0374c2ec344a71d48ad863&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
