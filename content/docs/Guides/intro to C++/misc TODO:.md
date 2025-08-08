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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYKFDCK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCWMmi1MN2M11EAGX4C3s9uIMcwvOKvNWpLQO2UbK66WwIhAI2R7MB9%2BkeDpjql8%2BXqFjVy808ddjwELk2Hmt61GMKPKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0YE7jvFihUgGXYG4q3ANgn0Lx3%2FNY5M7Qph5bN%2BOEzr3l%2BnMkYNVzpPvFeyAZ4mxJVKf4RJWuE%2BdONLUKwiDGm1arBkH2z1gvKT%2F0w4R2MeuK4J9HeJNLPXZn37QTc56%2BH1Yl%2BBZ8ricuSFJyAG2OIsiEnzINel6rrCzV8QGz3u%2FX0qfVBOJRxLcEWWRNFrwGf%2FX96qkeNJGYN6GEkWIqPt7gubq3OpebRegjmzUNlrrOeQC1gHAYnb%2FZI2PuuFFqB7I%2FVxVmv3pmitP2ZzjpqkhHLBeD6ep4r3wK%2BDtUPIUIb3xuxTJP1hgrC%2BLT5qPRhVJ3537fOaZntrgH%2By5waa42PWqlIiY2YPyDfK4KxfreK1zXJE%2FFrTDg0edOKYowS%2BXfijW6BghMNKa5O7W3J36rknptAuO06HJ4vcytUlxE8iqSOnr7kIf1lxLF1O7yXtN9%2FS1jOeV1GtbQn%2FBMuAqG2uuufSz08CTYUYfD3WsgVPMXdQpqc8TTckJpeMhjgvaPC1DzceuVrFJXjSZrkb8EHA22J7G7LgtpcBi2XNcgAlfQo6iYXtXTg5yJ%2BHhF1bvqfXFi7Pnr08eow0Mey97X4hDNj5J8JhO0T4mbeM1FsZZC15aZbQsmEvQHJ5EeW3FaR9jOK2to%2BzDz%2BtXEBjqkAbdvjS2%2Fyi3tCpzorPm5VY1DWNJUEpQABiU9RpDg7wrq63wuLYy7iJMyXa5s%2BkuvC0avjIwcDAvpFJu8M0hQxux9%2BduWFh7nvRwbJ9%2BOB7SdQe%2F%2B7tFMqoPkZI4n18U%2FlbLdnSk0M1fe8y%2FF2fpl08jZBQqhEljmZ5eipEWMP3l2cEXg9hfdwJkkCUUIZpJ2rMJ%2BRQ%2BSSl27Ik%2F%2FWgQGPScDc5bw&X-Amz-Signature=a09fe6bd610443bd442f246e4a710c7b0d6f0b530e726d7fc276ec1e0f410b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAYKFDCK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCWMmi1MN2M11EAGX4C3s9uIMcwvOKvNWpLQO2UbK66WwIhAI2R7MB9%2BkeDpjql8%2BXqFjVy808ddjwELk2Hmt61GMKPKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0YE7jvFihUgGXYG4q3ANgn0Lx3%2FNY5M7Qph5bN%2BOEzr3l%2BnMkYNVzpPvFeyAZ4mxJVKf4RJWuE%2BdONLUKwiDGm1arBkH2z1gvKT%2F0w4R2MeuK4J9HeJNLPXZn37QTc56%2BH1Yl%2BBZ8ricuSFJyAG2OIsiEnzINel6rrCzV8QGz3u%2FX0qfVBOJRxLcEWWRNFrwGf%2FX96qkeNJGYN6GEkWIqPt7gubq3OpebRegjmzUNlrrOeQC1gHAYnb%2FZI2PuuFFqB7I%2FVxVmv3pmitP2ZzjpqkhHLBeD6ep4r3wK%2BDtUPIUIb3xuxTJP1hgrC%2BLT5qPRhVJ3537fOaZntrgH%2By5waa42PWqlIiY2YPyDfK4KxfreK1zXJE%2FFrTDg0edOKYowS%2BXfijW6BghMNKa5O7W3J36rknptAuO06HJ4vcytUlxE8iqSOnr7kIf1lxLF1O7yXtN9%2FS1jOeV1GtbQn%2FBMuAqG2uuufSz08CTYUYfD3WsgVPMXdQpqc8TTckJpeMhjgvaPC1DzceuVrFJXjSZrkb8EHA22J7G7LgtpcBi2XNcgAlfQo6iYXtXTg5yJ%2BHhF1bvqfXFi7Pnr08eow0Mey97X4hDNj5J8JhO0T4mbeM1FsZZC15aZbQsmEvQHJ5EeW3FaR9jOK2to%2BzDz%2BtXEBjqkAbdvjS2%2Fyi3tCpzorPm5VY1DWNJUEpQABiU9RpDg7wrq63wuLYy7iJMyXa5s%2BkuvC0avjIwcDAvpFJu8M0hQxux9%2BduWFh7nvRwbJ9%2BOB7SdQe%2F%2B7tFMqoPkZI4n18U%2FlbLdnSk0M1fe8y%2FF2fpl08jZBQqhEljmZ5eipEWMP3l2cEXg9hfdwJkkCUUIZpJ2rMJ%2BRQ%2BSSl27Ik%2F%2FWgQGPScDc5bw&X-Amz-Signature=40a516bfebcd212ff9a92e25eff3582f135a39036b75070a8400bb5c13683d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
