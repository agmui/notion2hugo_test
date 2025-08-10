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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677ZZYLVU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE4laEYLZqSLf1aiFes4EZzzt4eKDHBVLdiTJI5hglaQIhAING3rg3PXHBp3suM6dGiOlAYeCjHeQNVNAGjOhP%2FeG9KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP6lnr10OigzKUk20q3AN1kXLqvz3xry5nlxLjeAW%2FTk9%2FgpktdsazDoYm4M0gOB7JilfGUn0Ka6xT%2B5doRSsNMzGszRxs%2BzwMVf7Ky2vOfXaAVkt6feszWFkC%2B4NDxob5MwJL7oCInWjh3z84%2FGYrhOeLfvtnXg8KqEjpeo9HgDOxYGVnouTzOH7XdDV%2BXK%2FvV7pkIZTMrda9lQN%2Bx80hjI1R4t1bU%2FsObUN%2F3SFdWYj0OEFEK5v84Gy0qS8DK3IpHL1mRq66CKvoMR42e0SeeKIGs5oS5s%2Ftda6vmSe2wsnneI9N4gkbi%2F5%2BbCBk9JcgLkmfmxBA3%2BtQyKBnKmxM0s17ueWKx3CQNsT%2Fvpls4F9DZOWAlKnZlUvDcPnbLGNkVM7e7qba3VDXfLPcMjl%2BNbk19S1dZ2aSiWaWGm%2BAyO7feFhZgTBJuvgStdmN9Ox0bfVxT3h2Skxwi4INE%2BOEJ0bbE7eXMR2advTN2AIxAlV2JOWBEBUrDzqbn%2BsgzsERXxWzCP%2FaQuE21d1W6YHq8L9Xz7C%2BKNd4XRMp9f%2BPtd9tyIo041q%2BFl9MMOL2tvs2I3RG9%2BLmF2Ene2a1sPRgmNW%2Bthbr3ylkr6%2FTb9LqyRexOU%2BAROWWYIVk2k2xS7IZKjY6Ak%2FkV5bQgjDelePEBjqkAdV99BGx42Pz9ZsTlRRUxnH%2BvT1r6j%2FwkIJyR4F5KqAP%2BA6C6jO6kuGSL8YMRvF3fHghlwm1Jyu7pOMi1WuS0aOTx3cFycInY66hMHkikfy81D3tTk7YuHXFEExPW6PApI70qIjDaq1B9%2FrOz1CwZ5T1fiiSLbFovxhjhjxCiRuBOKnWHli5jQwKSe9nfshSpi8gm9K9oZADoLcEnPaSOymwZ2fp&X-Amz-Signature=2e1638e06cc33fa01af678c1183c4981bd683dda49f3ac564f878ab026e76cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677ZZYLVU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDE4laEYLZqSLf1aiFes4EZzzt4eKDHBVLdiTJI5hglaQIhAING3rg3PXHBp3suM6dGiOlAYeCjHeQNVNAGjOhP%2FeG9KogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyP6lnr10OigzKUk20q3AN1kXLqvz3xry5nlxLjeAW%2FTk9%2FgpktdsazDoYm4M0gOB7JilfGUn0Ka6xT%2B5doRSsNMzGszRxs%2BzwMVf7Ky2vOfXaAVkt6feszWFkC%2B4NDxob5MwJL7oCInWjh3z84%2FGYrhOeLfvtnXg8KqEjpeo9HgDOxYGVnouTzOH7XdDV%2BXK%2FvV7pkIZTMrda9lQN%2Bx80hjI1R4t1bU%2FsObUN%2F3SFdWYj0OEFEK5v84Gy0qS8DK3IpHL1mRq66CKvoMR42e0SeeKIGs5oS5s%2Ftda6vmSe2wsnneI9N4gkbi%2F5%2BbCBk9JcgLkmfmxBA3%2BtQyKBnKmxM0s17ueWKx3CQNsT%2Fvpls4F9DZOWAlKnZlUvDcPnbLGNkVM7e7qba3VDXfLPcMjl%2BNbk19S1dZ2aSiWaWGm%2BAyO7feFhZgTBJuvgStdmN9Ox0bfVxT3h2Skxwi4INE%2BOEJ0bbE7eXMR2advTN2AIxAlV2JOWBEBUrDzqbn%2BsgzsERXxWzCP%2FaQuE21d1W6YHq8L9Xz7C%2BKNd4XRMp9f%2BPtd9tyIo041q%2BFl9MMOL2tvs2I3RG9%2BLmF2Ene2a1sPRgmNW%2Bthbr3ylkr6%2FTb9LqyRexOU%2BAROWWYIVk2k2xS7IZKjY6Ak%2FkV5bQgjDelePEBjqkAdV99BGx42Pz9ZsTlRRUxnH%2BvT1r6j%2FwkIJyR4F5KqAP%2BA6C6jO6kuGSL8YMRvF3fHghlwm1Jyu7pOMi1WuS0aOTx3cFycInY66hMHkikfy81D3tTk7YuHXFEExPW6PApI70qIjDaq1B9%2FrOz1CwZ5T1fiiSLbFovxhjhjxCiRuBOKnWHli5jQwKSe9nfshSpi8gm9K9oZADoLcEnPaSOymwZ2fp&X-Amz-Signature=0a3e16511743f7875ce9a0931fde0bb2c67f0c7939021d03c6f89556cfe973a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
