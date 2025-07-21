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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSUOWEU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcAgOvcxT7aMJDALtli3G1h5fyb57X5UXniriFMrO53QIhAMq9qqGDkH%2Bn5qC%2B%2FRxBmT3KhtIAiv4K7rBidq%2BDg8SZKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypCXKCUvcndLJ6eTkq3AMHY2tzl68N32zQf%2FQTwMHdMOdko9Qkj%2BHDpBh9M02ckHTteW5fyASE5f9ShWenDVBROMJHVmUVk2cVefyILB59TUTZeFmjudEp46%2FaSeMbQHRB3qxgFhPCnvMizSefUBdM1VRJbcJESCY%2BhmyJsmVeF1yvvZJolXINjpc4LPgrqgC%2BCjARRPtuqz9EVRPA6mEX2qChOkLMmWKFvyebnVNv%2B8wxiG0O5VmIiFvs%2FS069aC3I6ZjvzL%2FIzW81NX46rL5mZyLtkg80aKWIw67YHXoN%2FPBIwPyFcR0j%2FD1tNtS1BS5wRCcHe0xI3j4ENvv4FtHrCe6fRCjVXkpItSXhev%2BUVMkwhaRkTgVaXHpPyyutiEv8fA5kGo1bacIk0dgccfzeVhuuZqu8lPDzgiLL8HPGZhOlzZh5ioVCuf4aPxW63R0BIG2MiQBdo%2B0CDdQL272IpZX50pNRWfUaGvkhqypJq8uVUcdzs6lLg%2F3DDs%2FvLI6YK7f%2BocKGeh9pbJrHjPqe7Y9c96ADEQ4rZkv7C%2B3zam4LfuP6N3C%2FdRsqwEq96mEUqUyKgIoIxDqGD6DPjVyoQZSTIEzt7lenWbNbfFjYpQT4MTOIwowiXuxEQ2D%2FryXsFtbcrGntcQ6QzCLjvjDBjqkAS7g5U8dFymKyyVInHPvoXQdlAWPo0otVDemES7kzOc4l5VDaQ8u%2BdSpnAbxsopa8JiJO%2FiCdlLLQnvKh99ii3WoxlgBultlDuifY3FTd69WInSLh%2FPIl3uKa64gLFoNVphXBJsXr8mkjcn9oOcvTzd1kry6wdhdWT1hFoAgNS2DXF4DYnihqAMq3uP%2Fj96hPJ%2F22rfQ3fbzMWMAf052OSTvbzyz&X-Amz-Signature=dc62dbb52129596ff4b15b4b0da2b6c791a950a654dec42be1a514044ced8404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSUOWEU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcAgOvcxT7aMJDALtli3G1h5fyb57X5UXniriFMrO53QIhAMq9qqGDkH%2Bn5qC%2B%2FRxBmT3KhtIAiv4K7rBidq%2BDg8SZKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypCXKCUvcndLJ6eTkq3AMHY2tzl68N32zQf%2FQTwMHdMOdko9Qkj%2BHDpBh9M02ckHTteW5fyASE5f9ShWenDVBROMJHVmUVk2cVefyILB59TUTZeFmjudEp46%2FaSeMbQHRB3qxgFhPCnvMizSefUBdM1VRJbcJESCY%2BhmyJsmVeF1yvvZJolXINjpc4LPgrqgC%2BCjARRPtuqz9EVRPA6mEX2qChOkLMmWKFvyebnVNv%2B8wxiG0O5VmIiFvs%2FS069aC3I6ZjvzL%2FIzW81NX46rL5mZyLtkg80aKWIw67YHXoN%2FPBIwPyFcR0j%2FD1tNtS1BS5wRCcHe0xI3j4ENvv4FtHrCe6fRCjVXkpItSXhev%2BUVMkwhaRkTgVaXHpPyyutiEv8fA5kGo1bacIk0dgccfzeVhuuZqu8lPDzgiLL8HPGZhOlzZh5ioVCuf4aPxW63R0BIG2MiQBdo%2B0CDdQL272IpZX50pNRWfUaGvkhqypJq8uVUcdzs6lLg%2F3DDs%2FvLI6YK7f%2BocKGeh9pbJrHjPqe7Y9c96ADEQ4rZkv7C%2B3zam4LfuP6N3C%2FdRsqwEq96mEUqUyKgIoIxDqGD6DPjVyoQZSTIEzt7lenWbNbfFjYpQT4MTOIwowiXuxEQ2D%2FryXsFtbcrGntcQ6QzCLjvjDBjqkAS7g5U8dFymKyyVInHPvoXQdlAWPo0otVDemES7kzOc4l5VDaQ8u%2BdSpnAbxsopa8JiJO%2FiCdlLLQnvKh99ii3WoxlgBultlDuifY3FTd69WInSLh%2FPIl3uKa64gLFoNVphXBJsXr8mkjcn9oOcvTzd1kry6wdhdWT1hFoAgNS2DXF4DYnihqAMq3uP%2Fj96hPJ%2F22rfQ3fbzMWMAf052OSTvbzyz&X-Amz-Signature=9224b73501560b402ba74649af1cf4058bb29490a2ab4828e51d7885ba4b668f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
