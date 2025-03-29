---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2HEXOA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDb%2FdVdbqArAo2Pk0RSsp67c6Zed8ZroP4aDUVlrWKJLwIgWKSfM2lmskDpwJEGaiLctn4AgYUr7HicYTfE3GacXyYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHQ3Tglq5xOgDqy%2BnyrcA5w1YuHb5HTQjBNApfBhjYhqrbc6ofrklV1yTwDRKxRbDLkC1Zk1AoVy1hBR8BLof6HXABkkPCSqvKgPxuDaln0M71YRRqbGUfiXm2n9wXDE4kTI9YL%2BMXWfXcrqG1lXQaA4FgPqeMscHqqTjHqiaMPXy31PAP6K1UZB1jReGhFP0KNcsmbhR44xVQIGsZ98ZVoZWsoCwDDz8FhjpEdSkgsIfEYCe4dJ1nIubNq%2Bsl80zvEZvEcIVLdRVrhPxAp7Zhb%2BneK4TlmYSOtJwVKxsQkFHCf5%2BqXHQqwjH7dAi3a6QSEGEb29JMhCuP37eVt66IZVT8ehaTWQJo7x4WeglkfoTKB3%2B3v4ggLr14%2F9%2B6q7wYPHJDkGkmj9VJHpr5ED8FbTuCEmNd2bZiFGBCzhU6oiBxU%2Ba%2FDvzdI%2Fp3IMVsGo6ksQR6xH3wCZn5E5AMZZ7BVlKucrhD3PSgn71zhPq6TczQ5hbR43aH%2BxMy1j3g%2F8fJeFKc%2F8sM4blCVLviWTYWR8%2BlHzDObSzg8u%2Fu5XWwfeghTZGDUHtx8Od8kECIJRQv%2FOWxbvLvCGhZL%2F3cjF7wXQqyr50XGtzTvaZOHDSoAhbOwtUqYnYNB7Ui3NNdiqzdi%2FH0bHDxqp4VMLMMfinr8GOqUB5vHlsBexeg1bYdrHqpyiM2I3Rn3kkpHZH2aR391Tnbj53VC8EKqUclvNcBmahyUYoQLdMl%2BmDPKGpYkyx3pV5e6YBiKB3uiBWbvZEM9fFQ4FLdz3K2pkF9ypARxoRMEZCPhHf5kHDq4fOJTxpu1kLakPcQnk4NYkMAA9ApVQEDmt30dBabz2ceKzJOfCpSUycOgZnuoDxQF85YCMqmEIVCpR%2FVPK&X-Amz-Signature=d53795b1971715ebf0f0534ded549bf0d876929d0298812db27708b54f8f6828&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ2HEXOA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T100724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQDb%2FdVdbqArAo2Pk0RSsp67c6Zed8ZroP4aDUVlrWKJLwIgWKSfM2lmskDpwJEGaiLctn4AgYUr7HicYTfE3GacXyYq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHQ3Tglq5xOgDqy%2BnyrcA5w1YuHb5HTQjBNApfBhjYhqrbc6ofrklV1yTwDRKxRbDLkC1Zk1AoVy1hBR8BLof6HXABkkPCSqvKgPxuDaln0M71YRRqbGUfiXm2n9wXDE4kTI9YL%2BMXWfXcrqG1lXQaA4FgPqeMscHqqTjHqiaMPXy31PAP6K1UZB1jReGhFP0KNcsmbhR44xVQIGsZ98ZVoZWsoCwDDz8FhjpEdSkgsIfEYCe4dJ1nIubNq%2Bsl80zvEZvEcIVLdRVrhPxAp7Zhb%2BneK4TlmYSOtJwVKxsQkFHCf5%2BqXHQqwjH7dAi3a6QSEGEb29JMhCuP37eVt66IZVT8ehaTWQJo7x4WeglkfoTKB3%2B3v4ggLr14%2F9%2B6q7wYPHJDkGkmj9VJHpr5ED8FbTuCEmNd2bZiFGBCzhU6oiBxU%2Ba%2FDvzdI%2Fp3IMVsGo6ksQR6xH3wCZn5E5AMZZ7BVlKucrhD3PSgn71zhPq6TczQ5hbR43aH%2BxMy1j3g%2F8fJeFKc%2F8sM4blCVLviWTYWR8%2BlHzDObSzg8u%2Fu5XWwfeghTZGDUHtx8Od8kECIJRQv%2FOWxbvLvCGhZL%2F3cjF7wXQqyr50XGtzTvaZOHDSoAhbOwtUqYnYNB7Ui3NNdiqzdi%2FH0bHDxqp4VMLMMfinr8GOqUB5vHlsBexeg1bYdrHqpyiM2I3Rn3kkpHZH2aR391Tnbj53VC8EKqUclvNcBmahyUYoQLdMl%2BmDPKGpYkyx3pV5e6YBiKB3uiBWbvZEM9fFQ4FLdz3K2pkF9ypARxoRMEZCPhHf5kHDq4fOJTxpu1kLakPcQnk4NYkMAA9ApVQEDmt30dBabz2ceKzJOfCpSUycOgZnuoDxQF85YCMqmEIVCpR%2FVPK&X-Amz-Signature=0c2fa4c21e9a13fde51d6546750bdc6cadfcc2ad98719c56b982dd1927b0370b&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
