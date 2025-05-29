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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAJNISIW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2dVRomXZrySpoPOQanCTaQw1%2BGOxGqv%2FTifQZXpjtnwIhALB%2F%2FcT88LRaUEKZTvtwebtaFFXFhtEgOswGBtGHI8w9KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRcxUyCy1OWkd3B4Yq3ANZjh6MhmPTlc6xiCtIcju68ghc0kPt0h41ma%2BRcJXxSk3%2FMsc2uV57P0dPQpTQE2RbCKyx6RK0nl7QidkacUtgjDCFrL7yytW72dYrSEpXqIApGXid1ZwPXURzErf51I2xaZILLpkgzKDdD4okWFZMa39QAqBigU1TBPFFZLMWz88aMT03IVmMc64nTXvKbLYMPLVO0k17A9cF1OGXgqrgNL1RRnJtyn0vIEpTBtwK36VURsXdk4I4loj7mlk3vu7qs3FGxxncQPOedbcFkmSM2DezIKpVzcccJNTqHa53HnSt8KM%2BCF6QfLb%2Fh99lPSbAx4VCj5m2vs%2BierY6q43NAx%2BIgnvu1Hy%2BPCjUre6pgY7kwsevjY0SdNtLlUOeKFW67OOKPJg3N8pbb2xVHyM9rhx%2Fux5usDBl%2BxrJ5NJ2uZu4HufHOpjLp4kUv6tTbv4RcOzRprNJOFAVaMKwgKHx7lgpppGFmGPUlF7zclg4w%2FfR5UoH8y4XotDNu1SSwjMmB%2FHQfscQIoGKPSFLIqPAd1Rxyb2o3QBgigOV1EFIdk%2F6vVibNem3dwjumyfLdZWhbx4GmzwhhTVx4SntPYxO362qJ868Gmn0LNXZOk9oU7zQ%2BtXPq8eAnMswODC1reDBBjqkAcMxzdQAwgYky2qznpbu6YGOAtKQLFLK2YkPggQsAoDeqoRfPTrHx6JAZ5GWig2NeWLk0HrRvWhJQspENJXafAql%2FaOOYxYvq8IWX2W%2FeDQzBHhHB4KlWENNvnN9WSjjF9z7%2BmrfYlOePXQVWXqeFRN5dCASk7ki3DLe8FeXMvTFBQBjCsI%2FupmdjMRBvAxtPjQl73ExGhvvaciipAvmkvtfJkZP&X-Amz-Signature=4e5e8d9b3ba08d30ae74dede53d1b4a61bd0a794554c0f2b5f366c223068c6c4&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAJNISIW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2dVRomXZrySpoPOQanCTaQw1%2BGOxGqv%2FTifQZXpjtnwIhALB%2F%2FcT88LRaUEKZTvtwebtaFFXFhtEgOswGBtGHI8w9KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRcxUyCy1OWkd3B4Yq3ANZjh6MhmPTlc6xiCtIcju68ghc0kPt0h41ma%2BRcJXxSk3%2FMsc2uV57P0dPQpTQE2RbCKyx6RK0nl7QidkacUtgjDCFrL7yytW72dYrSEpXqIApGXid1ZwPXURzErf51I2xaZILLpkgzKDdD4okWFZMa39QAqBigU1TBPFFZLMWz88aMT03IVmMc64nTXvKbLYMPLVO0k17A9cF1OGXgqrgNL1RRnJtyn0vIEpTBtwK36VURsXdk4I4loj7mlk3vu7qs3FGxxncQPOedbcFkmSM2DezIKpVzcccJNTqHa53HnSt8KM%2BCF6QfLb%2Fh99lPSbAx4VCj5m2vs%2BierY6q43NAx%2BIgnvu1Hy%2BPCjUre6pgY7kwsevjY0SdNtLlUOeKFW67OOKPJg3N8pbb2xVHyM9rhx%2Fux5usDBl%2BxrJ5NJ2uZu4HufHOpjLp4kUv6tTbv4RcOzRprNJOFAVaMKwgKHx7lgpppGFmGPUlF7zclg4w%2FfR5UoH8y4XotDNu1SSwjMmB%2FHQfscQIoGKPSFLIqPAd1Rxyb2o3QBgigOV1EFIdk%2F6vVibNem3dwjumyfLdZWhbx4GmzwhhTVx4SntPYxO362qJ868Gmn0LNXZOk9oU7zQ%2BtXPq8eAnMswODC1reDBBjqkAcMxzdQAwgYky2qznpbu6YGOAtKQLFLK2YkPggQsAoDeqoRfPTrHx6JAZ5GWig2NeWLk0HrRvWhJQspENJXafAql%2FaOOYxYvq8IWX2W%2FeDQzBHhHB4KlWENNvnN9WSjjF9z7%2BmrfYlOePXQVWXqeFRN5dCASk7ki3DLe8FeXMvTFBQBjCsI%2FupmdjMRBvAxtPjQl73ExGhvvaciipAvmkvtfJkZP&X-Amz-Signature=b5e8659f17764adb99912fc9019c190247ea1b8ddb605000952fe8774cf347b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
